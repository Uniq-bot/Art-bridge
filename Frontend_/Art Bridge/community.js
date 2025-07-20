document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.querySelector('.close-btn');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle menu when menu icon is clicked
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Close menu when close button is clicked
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Handle dropdown menu clicks
    dropdowns.forEach(dropdown => {
        const arrow = dropdown.querySelector('#arrow');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        arrow.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent menu from closing when clicking arrow
            
            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.querySelector('.dropdown-content').classList.remove('active');
                }
            });

            // Toggle current dropdown
            dropdownContent.classList.toggle('active');
            
            // Rotate arrow icon
            arrow.classList.toggle('rotate');
        });
    });
});