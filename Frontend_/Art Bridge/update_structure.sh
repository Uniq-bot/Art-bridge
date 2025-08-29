#!/bin/bash

# Path to the HTML files directory
HTML_DIR="/home/uniq/Frontend_/Art Bridge/html"

# Find all HTML files and update them
find "$HTML_DIR" -type f -name "*.html" | while read -r file; do
    echo "Updating: $file"
    
    # Create a temporary file
    tmp_file="${file}.tmp"
    
    # Process the file
    awk '
    # Skip the existing header and footer
    /<header>/,/<\/header>/ { next; }
    /<footer.*>/,/<\/footer>/ { next; }
    
    # Add header and footer containers before the body content
    /<body>/ { 
        print;
        print "    <!-- Header Container -->";
        print "    <div id=\"header\"></div>";
        next;
    }
    
    # Add footer container and script before closing body
    /<\/body>/ {
        print "    <!-- Footer Container -->";
        print "    <div id=\"footer\"></div>";
        print "    ";
        print "    <!-- Load Header and Footer -->";
        print "    <script src=\"../js/fetchHF.js\"></script>";
        print "</body>";
        next;
    }
    
    # Print all other lines
    { print; }
    ' "$file" > "$tmp_file"
    
    # Replace the original file
    mv "$tmp_file" "$file"
    
    echo "Updated: $file"
done

echo "All HTML files have been updated with the new header and footer structure."
