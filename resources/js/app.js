document.addEventListener('DOMContentLoaded', function() {
    // 1. Get references to the necessary elements
    const modal = document.getElementById('bookingModal');
    // Selects ALL links with the class 'showtime-link'
    const showtimeLinks = document.querySelectorAll('.showtime-link'); 
    const closeBtn = document.getElementById('closeBtn');

    // 2. Function to show the modal (set display to 'flex' for centering)
    function openModal() {
        modal.style.display = 'flex'; 
        document.body.style.overflow = 'hidden'; // Prevents body scrolling when modal is open
    }

    // 3. Function to hide the modal (set display to 'none')
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable body scrolling
    }

    // 4. Add event listeners to all showtime links
    showtimeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the browser from jumping to the href='#'
            openModal();
            // OPTIONAL: Get the showtime time (e.g., '12:00') and update the modal content if needed
            const selectedTime = link.textContent;
            console.log("Selected Show Time:", selectedTime);
        });
    });

    // 5. Add event listener to the close button
    closeBtn.addEventListener('click', closeModal);

    // 6. Close the modal if the user clicks directly on the dark overlay (not the content box)
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    const continueButton = document.getElementById('continueButton');

    // Function to handle redirection
    continueButton.addEventListener('click', function() {
        // Here you would run any final checks (e.g., is ticket count > 0?)
        
        // Redirect to index.html
        window.location.href = '/seats';
    });

    // 1. Get references to the necessary elements
    const minusBtn = document.querySelector('.minus-btn');
    const plusBtn = document.querySelector('.plus-btn');
    const seatCountSpan = document.querySelector('.seat-count');

    // Define limits (e.g., minimum of 1 and a maximum, let's use 8)
    const MIN_SEATS = 1;
    const MAX_SEATS = 8; // Adjust this limit as needed

    // 2. Event Listener for the PLUS button (+)
    plusBtn.addEventListener('click', function() {
        // Get the current count and convert it to a number
        let currentCount = parseInt(seatCountSpan.textContent);

        // Check if the current count is less than the maximum allowed
        if (currentCount < MAX_SEATS) {
            currentCount++; // Increase the count by 1
            seatCountSpan.textContent = currentCount; // Update the display
        }
    });

    // 3. Event Listener for the MINUS button (–)
    minusBtn.addEventListener('click', function() {
        // Get the current count and convert it to a number
        let currentCount = parseInt(seatCountSpan.textContent);

        // Check if the current count is greater than the minimum allowed (1)
        if (currentCount > MIN_SEATS) {
            currentCount--; // Decrease the count by 1
            seatCountSpan.textContent = currentCount; // Update the display
        }
    });
    
    
});