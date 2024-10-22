
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


  // Function to switch active card
  function switchCard(targetId) {
    const cards = document.querySelectorAll('.cards');
    cards.forEach(card => card.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
  }


// Add event listeners to nav items
    const navbItems = document.querySelectorAll('.nav-item');
    navbItems.forEach(item => {
      item.addEventListener('click', () => {
        switchCard(item.getAttribute('data-target'));
      });
    });

    // Optionally, show the first card by default (active by default in HTML)
    document.querySelector('.nav-item[data-target="recent-card"]').classList.add('active');





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









document.addEventListener('DOMContentLoaded', function () {
    // Function to handle dropdown activation for each section (where, checkin, checkout, who)
    function setupDropdown(containerId) {
        const container = document.getElementById(containerId);
        const navLinks = container.querySelectorAll('.where-nav a');
        const navItems = container.querySelectorAll('.where-navitem');
        const contentSections = container.querySelectorAll('.content-section');

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

        // Set default active nav item (Region) for this container
        const defaultNavLink = container.querySelector('.where-nav a[data-target^="region-content"]');
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

        // Handle clicks on sub-content elements (m-c class)
        const elements = container.querySelectorAll('.m-c');
        elements.forEach(element => {
            element.addEventListener('click', () => {
                elements.forEach(el => el.classList.remove('active'));
                element.classList.add('active');
            });
        });
    }

    // Initialize dropdowns for each section
    setupDropdown('where-container');
    setupDropdown('checkin-container');
    setupDropdown('checkout-container');
    setupDropdown('who-container');
});

// Get all input fields and dropdown containers
const destinationInput = document.getElementById('destination');
const checkInInput = document.getElementById('check-in');
const checkOutInput = document.getElementById('check-out');
const whoInput = document.getElementById('who');

const whereContainer = document.getElementById('where-container');
const checkinContainer = document.getElementById('checkin-container');
const checkoutContainer = document.getElementById('checkout-container');
const whoContainer = document.getElementById('who-container');

// Function to show the correct dropdown for the clicked input field
function showDropdown(inputField, container) {
    // Hide all dropdowns
    whereContainer.classList.remove('visible');
    checkinContainer.classList.remove('visible');
    checkoutContainer.classList.remove('visible');
    whoContainer.classList.remove('visible');

    // Show the dropdown for the clicked input field
    container.classList.add('visible');
}

// Event listeners for input fields
destinationInput.addEventListener('click', function (event) {
    event.stopPropagation();
    showDropdown(destinationInput, whereContainer);
});

checkInInput.addEventListener('click', function (event) {
    event.stopPropagation();
    showDropdown(checkInInput, checkinContainer);
});

checkOutInput.addEventListener('click', function (event) {
    event.stopPropagation();
    showDropdown(checkOutInput, checkoutContainer);
});

whoInput.addEventListener('click', function (event) {
    event.stopPropagation();
    showDropdown(whoInput, whoContainer);
});

// Hide dropdown if the user clicks outside of the input fields or containers
document.addEventListener('click', function (event) {
    if (!destinationInput.contains(event.target) && 
        !checkInInput.contains(event.target) && 
        !checkOutInput.contains(event.target) && 
        !whoInput.contains(event.target) &&
        !whereContainer.contains(event.target) && 
        !checkinContainer.contains(event.target) && 
        !checkoutContainer.contains(event.target) && 
        !whoContainer.contains(event.target)) {
        
        whereContainer.classList.remove('visible');
        checkinContainer.classList.remove('visible');
        checkoutContainer.classList.remove('visible');
        whoContainer.classList.remove('visible');
    }
});
