
//navbar
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        navItems.forEach(nav => nav.classList.remove('active'));
        // Add active class to the clicked item
        item.classList.add('active');
    });
});






//card
// Get all tour-card elements
const tourCards = document.querySelectorAll('.tour-card');

// Add click event listener to each tour-card element
tourCards.forEach(card => {
    card.addEventListener('click', function() {
        // Remove 'active' class from all tour-card elements
        tourCards.forEach(card => card.classList.remove('active'));
        
        // Add 'active' class to the clicked tour-card element
        this.classList.add('active');
    });
});




// Get the 'Where' input and the dropdown container
const destinationInput = document.getElementById('destination');
const whereContainer = document.getElementById('where-container');

// Show the dropdown when the input is clicked
destinationInput.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent immediate closure by click event
    whereContainer.classList.add('visible');
});

// Hide the dropdown if the user clicks outside of the input field and the container
document.addEventListener('click', function(event) {
    if (!destinationInput.contains(event.target) && !whereContainer.contains(event.target)) {
        whereContainer.classList.remove('visible');
    }
});









document.addEventListener('DOMContentLoaded', function () {
    // Select all navigation items
    const navLinks = document.querySelectorAll('.where-nav a');
    const navItems = document.querySelectorAll('.where-navitem');
    const contentSections = document.querySelectorAll('.content-section');

    // Function to deactivate all nav items and content sections
    function deactivateAll() {
        navItems.forEach(item => item.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));
    }

    // Function to activate a specific nav item and its content
    function activateNavItem(navItem, targetId) {
        navItem.classList.add('active');
        document.getElementById(targetId).classList.add('active');
    }

    // Set default active nav item (Region)
    const defaultNavLink = document.querySelector('.where-nav a[data-target="region-content"]');
    const defaultNavItem = defaultNavLink.querySelector('.where-navitem');
    const defaultContent = document.getElementById(defaultNavLink.getAttribute('data-target'));
    activateNavItem(defaultNavItem, defaultContent.id);

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('data-target');
            const targetNavItem = this.querySelector('.where-navitem');

            // Deactivate all
            deactivateAll();

            // Activate the clicked nav item and its content
            activateNavItem(targetNavItem, targetId);
        });
    });


    

            // Select all elements with the class 'm-c'
        const elements = document.querySelectorAll('.m-c');

        elements.forEach(element => {
            element.addEventListener('click', () => {
                // Remove 'active' class from all elements
                elements.forEach(el => el.classList.remove('active'));
                
                // Add 'active' class to the clicked element
                element.classList.add('active');
            });
        });


    
});

