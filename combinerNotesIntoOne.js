const fs = require('fs');
const path = require('path');

// Function to ensure the output directory exists
function ensureDirectoryExists(directoryPath) {
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
        console.log(`Created directory: ${directoryPath}`);
    }
}

// Function to get all markdown files in the current directory
function getMarkdownFiles() {
    const files = fs.readdirSync('.');
    return files.filter(file => file.endsWith('.md') && file.toLowerCase() !== 'readme.md');
}

// Function to generate anchor link from header text
function generateAnchor(headerText) {
    return headerText
        .toLowerCase()
        .replace(/[^\w\s\u00C0-\u00FF\u0100-\u017F\u0180-\u024F-]/g, '') // Remove special characters but keep diacritics
        .replace(/\s+/g, '-')     // Replace spaces with hyphens
        .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
        .replace(/^-|-$/g, '');   // Remove leading/trailing hyphens
}

// Function to extract headers and generate TOC
function generateTableOfContents(content) {
    const headerRegex = /^# (.+)$/gm;
    const headers = [];
    let match;

    while ((match = headerRegex.exec(content)) !== null) {
        const headerText = match[1].trim();
        const anchor = generateAnchor(headerText);
        headers.push({
            text: headerText,
            anchor: anchor
        });
    }

    if (headers.length === 0) {
        return '';
    }

    let toc = '# Table of Contents\n\n';
    headers.forEach(header => {
        toc += `- [${header.text}](#${header.anchor})\n`;
    });
    toc += '\n---\n\n';

    return toc;
}

// Function to add back-to-top links above each main header
function addBackToTopLinks(content) {
    const backToTopLink = '↑ [Back to Table of Contents](#table-of-contents)\n\n';

    // Split content into lines
    const lines = content.split('\n');
    const result = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Check if this line is a main header (starts with # )
        if (line.match(/^# /)) {
            // Don't add back-to-top link before the very first header if it's at the beginning
            if (i > 0 && result.length > 0) {
                // Add some spacing and the back-to-top link
                result.push('');
                result.push(backToTopLink.trim());
                result.push('');
            }
        }

        result.push(line);
    }

    return result.join('\n');
}

// Function to combine markdown files
function combineMarkdownFiles(outputPath) {
    const mdFiles = getMarkdownFiles();

    if (mdFiles.length === 0) {
        console.log('No markdown files found in the current directory.');
        return;
    }

    let combinedContent = '';

    mdFiles.forEach((file, index) => {
        const content = fs.readFileSync(file, 'utf8');

        // Add a separator between files, but not before the first file
        if (index === 0) {
            combinedContent += content;
        } else {
            combinedContent += '\n\n---\n\n' + content;
        }

        console.log(`Added: ${file}`);
    });

    // Generate table of contents
    const toc = generateTableOfContents(combinedContent);

    // Add back-to-top links above each section
    const contentWithBackLinks = addBackToTopLinks(combinedContent);

    // Combine TOC with content
    const finalContent = toc + contentWithBackLinks;

    fs.writeFileSync(outputPath, finalContent);
    console.log(`Combined ${mdFiles.length} markdown files into: ${outputPath}`);

    // Count headers found
    const headerCount = (combinedContent.match(/^# /gm) || []).length;
    console.log(`Generated table of contents with ${headerCount} headers`);
}

// Main execution
function main() {
    const outputDir = path.join('.', 'generated');
    const outputPath = path.join(outputDir, 'combined.md');

    ensureDirectoryExists(outputDir);
    combineMarkdownFiles(outputPath);
}

main();
