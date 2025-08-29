#!/bin/bash

# Path to the HTML files directory
HTML_DIR="/home/uniq/Frontend_/Art Bridge/html"

# Find all HTML files and remove the arrow button from newsletter forms
find "$HTML_DIR" -type f -name "*.html" | while read -r file; do
    # Remove the button element that contains the arrow
    sed -i '/<form class="newsletter-form">/,/<\/form>/ { /<button type="submit">→<\/button>/d }' "$file"
    echo "Updated: $file"
done

echo "All HTML files have been updated to remove the arrow button from newsletter forms."
