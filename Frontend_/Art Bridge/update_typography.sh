#!/bin/bash

# Path to the HTML files directory
HTML_DIR="/home/uniq/Frontend_/Art Bridge/html"

# Find all HTML files and update them to include typography.css
find "$HTML_DIR" -type f -name "*.html" | while read -r file; do
    # Check if typography.css is already included
    if ! grep -q "typography\.css" "$file"; then
        # Insert the typography.css link after the first CSS file
        sed -i '/\.css"/a \    <link rel="stylesheet" href="../css/typography.css">' "$file"
        echo "Updated: $file"
    else
        echo "Already has typography: $file"
    fi
done

echo "All HTML files have been updated with consistent typography styles."
