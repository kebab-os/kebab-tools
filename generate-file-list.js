const fs = require('fs');

// 1. Files you want to exclude from the final array
const dontInclude = ['list.js', 'index.js']; 

try {
  // 2. Scan the functions directory
  const files = fs.readdirSync('./functions');

  // 3. Filter out the unwanted ones
  const filtered = files.filter(file => !dontInclude.includes(file));

  // 4. Save the result into the public folder
  if (!fs.existsSync('./public')) fs.mkdirSync('./public');
  fs.writeFileSync('./public/files.json', JSON.stringify(filtered));

  console.log('✅ Created public/files.json with:', filtered);
} catch (err) {
  console.error('❌ Build failed:', err);
  process.exit(1);
}
