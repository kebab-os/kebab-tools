const fs = require('fs');
const path = require('path');

// Settings
const targetDir = './functions';
const outputFile = './functions/list.json';
const dontInclude = ['index.js', 'list.js'];

function generateList() {
  try {
    // Read the directory
    const allFiles = fs.readdirSync(targetDir);

    // Filter the files
    const filteredFiles = allFiles.filter(file => !dontInclude.includes(file));

    // Save to a JSON file in the public directory
    fs.writeFileSync(outputFile, JSON.stringify(filteredFiles, null, 2));
    console.log(`Successfully generated ${outputFile}`);
  } catch (err) {
    console.error('Error generating file list:', err);
    process.exit(1);
  }
}

generateList();
