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
    const arr = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        // Skip excluded files
        if (!entry.isDirectory() && dontInclude.includes(entry.name)) {
            continue;
        }

        if (entry.isDirectory()) {
            // Folder → array of children
            arr.push({
                [entry.name]: buildTree(fullPath)
            });
        } else {
            // File → remove .js extension
            const cleanName = entry.name.replace(/\.js$/, '');

            // If file name matches folder name → return the name instead of null
            const parentFolder = path.basename(dir);

            if (cleanName === parentFolder) {
                arr.push({ [cleanName]: cleanName });
            } else {
                arr.push({ [cleanName]: null });
            }
        }
    }

    return arr;
}

try {
    const tree = {};

    // Top-level folders become keys
    const top = fs.readdirSync(functionsDir, { withFileTypes: true });

    for (const entry of top) {
        const fullPath = path.join(functionsDir, entry.name);

        if (entry.isDirectory()) {
            tree[entry.name] = buildTree(fullPath);
        } else if (!dontInclude.includes(entry.name)) {
            const cleanName = entry.name.replace(/\.js$/, '');
            tree[cleanName] = null;
        }
    }

    fs.writeFileSync(
        `${outputDir}/list.json`,
        JSON.stringify(tree, null, 2)
    );

    console.log(`Successfully generated ${outputDir}/list.json`);
} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
