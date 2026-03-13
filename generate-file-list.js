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

    if (!entry.isDirectory() && dontInclude.includes(entry.name)) {
      continue;
    }

    if (entry.isDirectory()) {
      const folderName = entry.name;
      const children = fs.readdirSync(fullPath);

      const textFile = children.find(f => f.endsWith('.js'));

      if (textFile) {
        const clean = textFile
          .replace(/\.js$/, '')
          .replace(/

\[|\]

/g, ''); // FIXED REGEX

        arr.push({ [folderName]: clean });
      } else {
        arr.push({ [folderName]: buildTree(fullPath) });
      }

    } else {
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

  let json = JSON.stringify(tree, null, 2);

  json = json
    .replace(/

\[\s+\{/g, "[ {")
    .replace(/\}\s+\]

/g, "} ]");

  fs.writeFileSync(`${outputDir}/list.json`, json);

  console.log(`Successfully generated ${outputDir}/list.json`);
} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}
