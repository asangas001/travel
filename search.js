// Function to set default active navigator and cards
function setDefaultActive() {
    const defaultNav = document.querySelector('.nav-item[data-set="recent"]');
    const targetSet = 'recent';

    if (defaultNav) {
        // Add 'active' class to the default nav item
        defaultNav.classList.add('active');

        // Show only the tour cards that match the default nav's data-set
        tourbCards.forEach(card => {
            if (card.getAttribute('data-set') === targetSet) {
                card.style.display = 'flex'; // Show matching cards
            } else {
                card.style.display = 'none'; // Hide non-matching cards
            }
        });
    }
}

// Call setDefaultActive on page load
document.addEventListener('DOMContentLoaded', setDefaultActive);

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

//detail switch
// Select the switch buttons and the containers
const switchButtons = document.querySelectorAll('.two-swtich a');
const mapContainer = document.querySelector('.map-container');
const locationDetails = document.querySelector('.location-details');

// Function to toggle visibility of containers
function toggleView(isMapViewActive, container) {
    const mapContainer = container.querySelector('.map-container');
    const locationDetails = container.querySelector('.location-details');

    if (isMapViewActive) {
        mapContainer.classList.add('active');
        locationDetails.classList.remove('active');
        mapContainer.style.display = 'block';
        locationDetails.style.display = 'none';
    } else {
        mapContainer.classList.remove('active');
        locationDetails.classList.add('active');
        mapContainer.style.display = 'none';
        locationDetails.style.display = 'block';
    }
}

// Add click event listener to each switch button
const containers = document.querySelectorAll('.details-container');
containers.forEach(container => {
    const switchButtons = container.querySelectorAll('.two-swtich a');

    switchButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            switchButtons.forEach(btn => {
                btn.querySelector('div').classList.remove('active');
            });
            button.querySelector('div').classList.add('active');
            const isMapView = button.querySelector('.map-view') !== null;
            toggleView(isMapView, container);
        });
    });
});

containers.forEach(container => {
    const mapContainer = container.querySelector('.map-container');
    const locationDetails = container.querySelector('.location-details');

    // Set map container as default view
    mapContainer.classList.add('active');
    mapContainer.style.display = 'block';
    locationDetails.classList.remove('active');
    locationDetails.style.display = 'none';
});

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
function activateDay(container, dayId, infoId) {
    const days = container.querySelectorAll('.day');
    days.forEach(d => d.classList.remove('active'));
    const activeDay = container.querySelector(`#${dayId}`);
    if (activeDay) {
        activeDay.classList.add('active');
    }
    const infos = container.querySelectorAll('.info');
    infos.forEach(info => info.classList.remove('active'));
    const activeInfo = container.querySelector(`#${infoId}`);
    if (activeInfo) {
        activeInfo.classList.add('active');
    }
}
    

// Ensure the script runs after the DOM is fully loaded
containers.forEach(container => {
    const dayElements = container.querySelectorAll('.day');
    dayElements.forEach(day => {
        day.addEventListener('click', function() {
            const dayId = this.id;
            const infoId = `info-${dayId.split('-')[1]}`;
            activateDay(container, dayId, infoId);
        });
    });

    // Optionally, set the first day and info as active if not set in HTML
    const firstDay = container.querySelector('.day-bar .day');
    const firstInfo = container.querySelector('.info');

    if (firstDay && !firstDay.classList.contains('active')) {
        firstDay.classList.add('active');
    }

    if (firstInfo && !firstInfo.classList.contains('active')) {
        firstInfo.classList.add('active');
    }
});



// Updated: Navigator (data-set) functionality
const navbItems = document.querySelectorAll('.nav-item');
const tourbCards = document.querySelectorAll('.tour-card');

// Add click event to each navigation item
navbItems.forEach(nav => {
    nav.addEventListener('click', () => {
        // Remove 'active' class from all nav items
        navbItems.forEach(item => item.classList.remove('active'));
        // Add 'active' class to the clicked nav item
        nav.classList.add('active');

        // Get the data-set value for the clicked navigation item (e.g., 'recent', 'favourites', etc.)
        const targetSet = nav.getAttribute('data-set');

        // Show only the tour cards that match the clicked navigation's data-set
        tourbCards.forEach(card => {
            if (card.getAttribute('data-set') === targetSet) {
                card.style.display = 'flex';  // Show matching cards
            } else {
                card.style.display = 'none';  // Hide non-matching cards
            }
        });
    });
});


// Tour card details change
const tourLinks = document.querySelectorAll('.tour-link');
const detailsContainers = document.querySelectorAll('.details-container');

// Add click event to each tour card
tourLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior

        // Remove 'active' class from all cards
        tourLinks.forEach(card => card.classList.remove('active'));
        link.classList.add('active'); // Make clicked card active

        // Hide all details containers
        detailsContainers.forEach(details => details.style.display = 'none');

        // Get the associated details-container ID
        const detailsId = link.getAttribute('data-details');

        // Show the corresponding details container
        const activeDetails = document.getElementById(detailsId);
        if (activeDetails) {
            activeDetails.style.display = 'flex';
        }
    });
});
