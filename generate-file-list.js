const fs = require('fs');
const path = require('path');

const dontInclude = ['list.js', 'index.js'];
const functionsDir = './functions';
const outputDir = './public';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

function buildTree(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const tree = {};

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        // Skip excluded files
        if (!entry.isDirectory() && dontInclude.includes(entry.name)) {
            continue;
        }

        if (entry.isDirectory()) {
            // Folder → nested object
            tree[entry.name] = buildTree(fullPath);
        } else {
            // File → remove .js extension
            const cleanName = entry.name.replace(/\.js$/, '');
            tree[cleanName] = cleanName;
        }
    }

    return tree;
}

try {
    const tree = buildTree(functionsDir);

    fs.writeFileSync(
        `${outputDir}/list.json`,
        JSON.stringify(tree, null, 2)
    );

    console.log(`Successfully generated ${outputDir}/list.json`);
} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
