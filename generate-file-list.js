const fs = require('fs');
const path = require('path');

const dontInclude = ['list.js', 'index.js'];
const functionsDir = './functions';
const outputDir = './public';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

function buildDiagram(dir, depth = 0) {
    let output = '';
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    // Filter out excluded files
    const validEntries = entries.filter(e => {
        if (!e.isDirectory() && dontInclude.includes(e.name)) return false;
        return true;
    });

    // Detect "folder with exactly one .js file"
    if (validEntries.length === 1 && !validEntries[0].isDirectory()) {
        const file = validEntries[0].name;

        if (file.endsWith('.js')) {
            const folderName = path.basename(dir);
            const fileName = file.replace(/\.js$/, '');

            const prefix = '--'.repeat(depth - 1); // folder depth
            output += `${prefix}${folderName}/${fileName}\n`;
            return output;
        }
    }

    // Normal folder listing
    for (const entry of validEntries) {
        const fullPath = path.join(dir, entry.name);
        const prefix = '--'.repeat(depth);

        if (entry.isDirectory()) {
            output += `${prefix}${entry.name}\n`;
            output += buildDiagram(fullPath, depth + 1);
        } else {
            let displayName = entry.name.replace(/\.js$/, '...');
            output += `${prefix}${displayName}\n`;
        }
    }

    return output;
}

try {
    const diagram = buildDiagram(functionsDir, 0);
    fs.writeFileSync(`${outputDir}/list.txt`, diagram);
    console.log(`Successfully generated ${outputDir}/list.txt`);
} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
