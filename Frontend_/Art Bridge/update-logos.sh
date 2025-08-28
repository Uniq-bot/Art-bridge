#!/bin/bash

# Directory containing HTML files
HTML_DIR="/home/uniq/Frontend_/Art Bridge/html"

# New logo HTML
NEW_LOGO='<a href="/index.html" class="logo">
  <span>Art Pool</span>
</a>'

# Find all HTML files and update them
export NEW_LOGO
find "$HTML_DIR" -type f -name "*.html" -not -path "*/partnerstories.html" | while read -r file; do
  echo "Updating $file..."
  # Replace the old logo structure with the new one
  perl -i -p0e 's#<div class="logo">\s*<p>Art <h1><\/h1> Pool<\/p>\s*<\/div>#$ENV{NEW_LOGO}#g' "$file"
  
  # Add logo.css if not already present
  if ! grep -q "logo\.css" "$file"; then
    perl -i -p0e 's#(<link rel="stylesheet" href="\.\./css/footer\.css">)#$1
  <link rel="stylesheet" href="../css/logo.css">#' "$file"
  fi
done

echo "Logo update complete!"
