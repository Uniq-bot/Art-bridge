// Mobile menu functionality
const menuToggle = document.querySelector('.menu');
const sidebar = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

// Toggle menu visibility
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close menu when close button is clicked
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

// Handle dropdown menus
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const arrow = dropdown.querySelector('#arrow');
    const content = dropdown.querySelector('.dropdown-content');

    arrow.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Close other dropdowns
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

// Slider functionality
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
const items = document.querySelectorAll('.items');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const counter = document.querySelector('.counter');

let currentIndex = 0;
const totalItems = items.length;

// Update slider position
function updateSlider() {
    const translateX = currentIndex * 100;
    sliderContainer.style.transform = `translateX(-${translateX}%)`;
    counter.textContent = `${currentIndex + 1}/${totalItems}`;
}

// Handle navigation
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    
    updateSlider();
    
});

// Auto-advance slider
let autoAdvance;

function startAutoAdvance() {
    autoAdvance = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSlider();
    }, 3000);
}

function stopAutoAdvance() {
    clearInterval(autoAdvance);
}

// Pause auto-advance on hover
slider.addEventListener('mouseenter', stopAutoAdvance);
slider.addEventListener('mouseleave', startAutoAdvance);

// Initialize slider
updateSlider();
startAutoAdvance();


// Art bridge collections slider
const collectionsContainer = document.querySelector('.collections-container');
const collectionsSlider = document.querySelector('.collections-slider');
const prevColBtn = document.querySelector('#prevCol');
const nextColBtn = document.querySelector('#nextCol');
const itemms = document.querySelectorAll('.itemm');
let currentIndexCol = 0;
const totalItemsCol = itemms.length;

// Update slider position
function updateSliderCol() {
    const translateX = currentIndexCol * 30;
    collectionsSlider.style.transform = `translateX(-${translateX}%)`;
}

// Handle navigation
prevColBtn.addEventListener('click', () => {
    currentIndexCol = (currentIndexCol - 1 + totalItemsCol) % totalItemsCol;
    updateSliderCol();
});

nextColBtn.addEventListener('click', () => {
    currentIndexCol = (currentIndexCol + 1) % totalItemsCol;
    updateSliderCol();
});

// Initialize slider
updateSliderCol();