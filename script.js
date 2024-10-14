
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

