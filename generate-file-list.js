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
      const folderName = entry.name;
      const children = fs.readdirSync(fullPath);

      // Look for text.js or [text].js
      const textFile = children.find(f => f.endsWith('.js'));

      if (textFile) {
        // Remove .js and remove brackets
        const clean = textFile.replace(/\.js$/, '').replace(/[

\[\]

]/g, '');
        arr.push({ [folderName]: clean });
      } else {
        arr.push({ [folderName]: buildTree(fullPath) });
      }

    } else {
      // Normal file
      const cleanName = entry.name.replace(/\.js$/, '');
      arr.push({ [cleanName]: null });
    }
  }

  return arr;
}

try {
  const tree = {};

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

  // Pretty outer JSON, readable arrays
  let json = JSON.stringify(tree, null, 2);

  // Make arrays compact but readable
  json = json
    .replace(/

\[\s+\{/g, "[ {")   // start arrays inline
    .replace(/\}\s+\]

/g, "} ]");  // end arrays inline

  fs.writeFileSync(`${outputDir}/list.json`, json);

  console.log(`Successfully generated ${outputDir}/list.json`);
} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}
