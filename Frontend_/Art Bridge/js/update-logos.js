// This script will standardize the logo across all HTML files
const fs = require('fs');
const path = require('path');

// Directory containing HTML files
const htmlDir = path.join(__dirname, '../html');

// New logo HTML
const newLogoHTML = `
<a href="/index.html" class="logo">
  <span>Art Pool</span>
</a>`;

// Read all HTML files in the directory
fs.readdir(htmlDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter HTML files
  const htmlFiles = files.filter(file => file.endsWith('.html'));

  // Process each HTML file
  htmlFiles.forEach(file => {
    const filePath = path.join(htmlDir, file);
    
    // Skip partnerstories.html as it's already updated
    if (file === 'partnerstories.html') return;

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file ${file}:`, err);
        return;
      }

      // Replace the logo div with the new structure
      const updatedContent = data.replace(
        /<div class="logo">\s*<p>Art <h1><\/h1> Pool<\/p>\s*<\/div>/g,
        newLogoHTML
      );

      // Write the updated content back to the file
      fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
        if (err) {
          console.error(`Error writing file ${file}:`, err);
          return;
        }
        console.log(`Updated logo in ${file}`);
      });
    });
  });
});
