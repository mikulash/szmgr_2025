const fs = require('fs');
const path = require('path');
const { Transformer } = require('markmap-lib');
const { fillTemplate } = require('markmap-render');
const puppeteer = require('puppeteer');

async function main() {
    const inputPath = process.argv[2];
    if (!inputPath) {
        console.error('Usage: node generateMindmap.js <file.md>');
        process.exit(1);
    }

    const md = fs.readFileSync(inputPath, 'utf8');
    const transformer = new Transformer();
    const { root, features, frontmatter } = transformer.transform(md);
    const assets = transformer.getUsedAssets(features);
    const html = fillTemplate(root, assets, { jsonOptions: frontmatter?.markmap });

    const baseName = path.basename(inputPath, path.extname(inputPath));
    const dirName = path.dirname(inputPath);
    const htmlPath = path.join(dirName, `${baseName}.html`);
    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log(`Created ${htmlPath}`);

    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: 'new'
    });
    const page = await browser.newPage();

    // Set a large viewport with high device scale factor for better resolution
    await page.setViewport({
        width: 3840,
        height: 2160,
        deviceScaleFactor: 2 // Increases the DPI
    });

    await page.setContent(html, { waitUntil: 'networkidle0' });

    // Add padding and properly scale the mindmap
    await page.evaluate(() => {
        const svg = document.querySelector('svg#mindmap');
        if (svg) {
            // Make sure the SVG is visible and scaled properly
            svg.style.width = '100%';
            svg.style.height = '100%';

            // Add some padding around the content
            const g = svg.querySelector('g');
            if (g) {
                const bbox = g.getBBox();
                const padding = 100;
                svg.setAttribute('viewBox', `${bbox.x - padding} ${bbox.y - padding} ${bbox.width + padding*2} ${bbox.height + padding*2}`);
            }
        }
    });

    const el = await page.$('svg#mindmap');
    const pngPath = path.join(dirName, `${baseName}.png`);
    if (el) {
        // Capture with high-quality settings
        await el.screenshot({
            path: pngPath,
            omitBackground: true // For transparent background
        });
        console.log(`Created ${pngPath}`);
    } else {
        console.warn('Mindmap element not found, PNG not generated');
    }
    await browser.close();
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
