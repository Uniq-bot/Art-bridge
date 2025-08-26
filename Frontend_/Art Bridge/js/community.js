/**
 * Art Sharing Page - Interactive Elements
 * This script handles the mobile menu toggle, dropdown functionality, and other interactive elements
 * on the Art Sharing page of the Art Pool website.
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const menuToggle = document.getElementById('menu-toggle');  // Mobile menu toggle button
    const sidebar = document.getElementById('sidebar');         // Sidebar navigation element
    const closeBtn = document.querySelector('.close-btn');      // Close button in mobile menu
    const dropdowns = document.querySelectorAll('.dropdown');   // All dropdown menu elements
    const searchbtn=document.querySelector('.searchbtn')
    const nav=document.querySelector('nav')
    const searchbar=document.querySelector('.search')
    searchbtn.addEventListener('click',()=>{
        searchbar.classList.add('searchactive')
        nav.style.opacity=0;
        setTimeout(()=>{
        nav.style.display='none'

        }, 1000)
    })
    const close=document.querySelector('.close-search')
    close.addEventListener('click', ()=>{
        searchbar.classList.remove('searchactive')
        nav.style.display='flex'
        setTimeout(()=>{
            nav.style.opacity=1;

        }, 100)



    })


    /**
     * Mobile Menu Toggle
     * Toggles the visibility of the mobile menu when the menu icon is clicked
     */
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    /**
     * Close Menu Button
     * Hides the mobile menu when the close button is clicked
     */
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    /**
     * Close Menu When Clicking Outside
     * Hides the mobile menu when clicking anywhere outside of it
     */
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    /**
     * Dropdown Menu Functionality
     * Handles the show/hide behavior of dropdown menus in the navigation
     */
    dropdowns.forEach(dropdown => {
        const arrow = dropdown.querySelector('#arrow');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        /**
         * Toggle Dropdown
         * Shows/hides the dropdown menu and rotates the arrow icon
         * @param {Event} e - The click event
         */
        arrow.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up to document
            
            // Close all other dropdowns before opening the current one
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.querySelector('.dropdown-content').classList.remove('active');
                    otherDropdown.querySelector('#arrow').classList.remove('rotate');
                }
            });

            // Toggle the current dropdown
            dropdownContent.classList.toggle('active');
            
            // Rotate the arrow icon to indicate the dropdown state
            arrow.classList.toggle('rotate');
        });
    });

    /**
     * Close Dropdown When Clicking Outside
     * Closes any open dropdown when clicking outside of it
     */
    document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => {
            dropdown.querySelector('.dropdown-content').classList.remove('active');
            dropdown.querySelector('#arrow').classList.remove('rotate');
        });
    });
});