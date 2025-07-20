/**
 * Art Bridge - Main JavaScript
 * 
 * This file contains all the interactive functionality for the Art Bridge website,
 * including mobile navigation, dropdown menus, and content sliders.
 * 
 * Features:
 * - Mobile-responsive navigation menu
 * - Dropdown menus with smooth animations
 * - Auto-advancing content slider
 * - Art collections slider with manual navigation
 */

/**
 * Mobile Navigation Menu
 * Handles the mobile menu toggle, close button, and click outside functionality
 */
// Core Navigation Elements
const menuToggle = document.querySelector('.menu');      // Mobile menu toggle button
const sidebar = document.querySelector('.nav-links');    // Sidebar navigation container
const closeBtn = document.querySelector('.close-btn');   // Close button in mobile menu

/**
 * Toggle Mobile Menu
 * Shows/hides the mobile navigation menu when the menu button is clicked
 */
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

/**
 * Close Mobile Menu
 * Hides the mobile navigation menu when the close button is clicked
 */
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

/**
 * Close Menu on Outside Click
 * Hides the mobile menu when clicking anywhere outside of it
 */
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

/**
 * Dropdown Menu Handler
 * Manages the dropdown menus in the navigation with smooth animations
 * and proper keyboard accessibility
 */
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const arrow = dropdown.querySelector('#arrow');
    const content = dropdown.querySelector('.dropdown-content');

    arrow.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Close other dropdowns when opening a new one
        dropdowns.forEach(other => {
            if (other !== dropdown) {
                other.querySelector('.dropdown-content').classList.remove('active');
                other.querySelector('#arrow').classList.remove('rotate');
            }
        });

        // Toggle current dropdown
        content.classList.toggle('active');
        arrow.classList.toggle('rotate');
    });
});

/**
 * Main Content Slider
 * Controls the auto-advancing hero slider with manual navigation controls
 * Features:
 * - Auto-advances every 5 seconds
 * - Pauses on hover
 * - Smooth transitions between slides
 * - Responsive design
 */
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
const items = document.querySelectorAll('.items');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const counter = document.querySelector('.counter');

let currentIndex = 0;
const totalItems = items.length;

// Update main slider position
function updateSlider() {
    const translateX = currentIndex * 100;
    sliderContainer.style.transform = `translateX(-${translateX}%)`;
    counter.textContent = `${currentIndex + 1}/${totalItems}`;
}

// Handle main slider navigation
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSlider();
});

// Auto-advance functionality for main slider
let autoAdvance;

function startAutoAdvance() {
    autoAdvance = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSlider();
    }, 5000);
}

function stopAutoAdvance() {
    clearInterval(autoAdvance);
}

// Pause auto-advance on hover
slider.addEventListener('mouseenter', stopAutoAdvance);
slider.addEventListener('mouseleave', startAutoAdvance);

// Initialize main slider
updateSlider();
startAutoAdvance();

/**
 * Art Bridge Collections Slider
 * Handles the horizontal scrolling gallery of art collections
 * Features:
 * - Manual navigation with previous/next buttons
 * - Responsive layout
 * - Smooth scrolling behavior
 */
const collectionsContainer = document.querySelector('.collections-container');
const collectionsSlider = document.querySelector('.collections-slider');
const prevColBtn = document.querySelector('#prevCol');
const nextColBtn = document.querySelector('#nextCol');
const itemms = document.querySelectorAll('.itemm');
let currentIndexCol = 0;
const totalItemsCol = itemms.length;

// Update collections slider position
function updateSliderCol() {
    const translateX = currentIndexCol * 70;
    collectionsSlider.style.transform = `translateX(-${translateX}%)`;
}

// Handle collections slider navigation
prevColBtn.addEventListener('click', () => {
    currentIndexCol = (currentIndexCol - 1 + totalItemsCol) % totalItemsCol;
    updateSliderCol();
});

nextColBtn.addEventListener('click', () => {
    currentIndexCol = (currentIndexCol + 1) % totalItemsCol;
    updateSliderCol();
});

// Initialize collections slider
updateSliderCol();





