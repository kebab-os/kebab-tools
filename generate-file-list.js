const fs = require('fs');
const path = require('path');

const dontInclude = ['list.js', 'index.js'];
const functionsDir = './functions';
const outputDir = './public';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Recursively walk directories
function walk(dir, fileList = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            walk(fullPath, fileList); // recurse into subdirectory
        } else {
            if (!dontInclude.includes(entry.name)) {
                fileList.push(fullPath.replace(functionsDir + '/', ''));
            }
        }
    }

    return fileList;
}

try {
    const allFiles = walk(functionsDir);

    fs.writeFileSync(
        `${outputDir}/list.json`,
        JSON.stringify(allFiles, null, 2)
    );

    console.log(`Successfully generated ${outputDir}/list.json`);
} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
