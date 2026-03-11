const fs = require('fs');

const dontInclude = ['list.js', 'list.json']; // Exclude the function and its data
const functionsDir = './functions';
const outputDir = './public'; // This MUST match your Cloudflare settings

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

try {
    const files = fs.readdirSync(functionsDir);
    const filtered = files.filter(f => !dontInclude.includes(f));

    // Save it to the public folder
    fs.writeFileSync(`${outputDir}/list.json`, JSON.stringify(filtered));
    console.log(`Successfully generated ${outputDir}/list.json`);
} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
