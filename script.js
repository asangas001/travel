
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







//detail swith
// Select the switch buttons and the containers
const switchButtons = document.querySelectorAll('.two-swtich a');
const mapContainer = document.querySelector('.map-container');
const locationDetails = document.querySelector('.location-details');

// Function to toggle visibility of containers
function toggleView(isMapViewActive) {
    if (isMapViewActive) {
        mapContainer.classList.add('active');
        locationDetails.classList.remove('active');
        mapContainer.style.display = 'block';  // Show map-container
        locationDetails.style.display = 'none'; // Hide location-details
    } else {
        mapContainer.classList.remove('active');
        locationDetails.classList.add('active');
        mapContainer.style.display = 'none';  // Hide map-container
        locationDetails.style.display = 'block'; // Show location-details
    }
}

// Add click event listener to each switch button
switchButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor behavior

        // Remove active class from all buttons
        switchButtons.forEach(btn => {
            btn.querySelector('div').classList.remove('active'); // Remove active from inner div
        });

        // Add active class to the clicked button's inner div
        button.querySelector('div').classList.add('active');

        // Check which button is clicked (map-view or detail-view)
        const isMapView = button.querySelector('.map-view') !== null;
        
        // Toggle views based on the active button
        toggleView(isMapView);
    });
});

// Initialize: Set map-container to active by default
mapContainer.classList.add('active'); // Add active class to map-container
mapContainer.style.display = 'block'; // Ensure map-container is displayed
locationDetails.style.display = 'none'; // Hide location-details by default









//day bar
// Get all day elements
const dayElements = document.querySelectorAll('.day');

// Add click event listener to each day element
dayElements.forEach(day => {
    day.addEventListener('click', function() {
        // Remove 'active' class from all day elements
        dayElements.forEach(day => day.classList.remove('active'));
        
        // Add 'active' class to the clicked day element
        this.classList.add('active');
    });
});




//day details change
// Function to activate a day and its corresponding info
function activateDay(dayId, infoId) {
    // Remove 'active' class from all day elements
    const days = document.querySelectorAll('.day');
    days.forEach(d => d.classList.remove('active'));
    
    // Add 'active' class to the clicked day
    const activeDay = document.getElementById(dayId);
    if (activeDay) {
        activeDay.classList.add('active');
    }
    
    // Remove 'active' class from all info sections
    const infos = document.querySelectorAll('.info');
    infos.forEach(info => info.classList.remove('active'));
    
    // Add 'active' class to the corresponding info section
    const activeInfo = document.getElementById(infoId);
    if (activeInfo) {
        activeInfo.classList.add('active');
    }
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Optionally, set the first day and info as active if not set in HTML
    const firstDay = document.querySelector('.day-bar .day');
    const firstInfo = document.querySelector('.info');
    
    if (firstDay && !firstDay.classList.contains('active')) {
        firstDay.classList.add('active');
    }
    
    if (firstInfo && !firstInfo.classList.contains('active')) {
        firstInfo.classList.add('active');
    }
});

