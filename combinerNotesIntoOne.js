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
            combinedContent +=  content;
        } else {
            combinedContent += '\n\n---\n' + content;
        }

        console.log(`Added: ${file}`);
    });

    fs.writeFileSync(outputPath, combinedContent);
    console.log(`Combined ${mdFiles.length} markdown files into: ${outputPath}`);
}

// Main execution
function main() {
    const outputDir = path.join('.', 'generated');
    const outputPath = path.join(outputDir, 'combined.md');

    ensureDirectoryExists(outputDir);
    combineMarkdownFiles(outputPath);
}

main();
