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

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        // Skip excluded files
        if (!entry.isDirectory() && dontInclude.includes(entry.name)) {
            continue;
        }

        const prefix = '--'.repeat(depth);
        const name = entry.name;

        output += `${prefix}${name}\n`;

        if (entry.isDirectory()) {
            output += buildDiagram(fullPath, depth + 1);
        }
    }

    return output;
}

try {
    // Build diagram starting inside functions/, but without printing "functions" itself
    const diagram = buildDiagram(functionsDir, 0);

    fs.writeFileSync(`${outputDir}/list.txt`, diagram);

    console.log(`Successfully generated ${outputDir}/list.txt`);
} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
