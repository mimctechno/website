const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(pagesDir);

let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Fix padding for all those sections
  content = content.replace(/p-10 md:p-16/g, 'p-6 sm:p-10 md:p-16');
  content = content.replace(/p-10 md:p-14/g, 'p-6 sm:p-10 md:p-14');
  
  // Fix heading sizes
  content = content.replace(/text-3xl md:text-4xl/g, 'text-2xl sm:text-3xl md:text-4xl');
  content = content.replace(/text-3xl md:text-5xl/g, 'text-2xl sm:text-3xl md:text-5xl');
  content = content.replace(/text-4xl md:text-5xl/g, 'text-3xl sm:text-4xl md:text-5xl');

  // Fix flex wrapping on headings
  content = content.replace(/mb-16 flex items-center gap-4/g, 'mb-10 sm:mb-16 flex flex-wrap items-center gap-2 sm:gap-4 break-words');
  content = content.replace(/mb-12 flex items-center gap-4/g, 'mb-8 sm:mb-12 flex flex-wrap items-center gap-2 sm:gap-4 break-words');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
    changedFiles++;
  }
});

console.log(`Updated ${changedFiles} files for mobile responsiveness.`);
