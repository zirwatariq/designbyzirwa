// Get a reference to the image link element
const backToTopLink = document.querySelector('.backtopimage a');

// Function to handle keyboard events on the link
function handleKeyboardEvents(event) {
    // Check if the event is a keyboard "Enter" key press (key code 13)
    if (event.keyCode === 13) {
        // Simulate a click event when "Enter" is pressed
        backToTopLink.click();
    }
}

// Add a keyboard event listener to the link
backToTopLink.addEventListener('keydown', handleKeyboardEvents);
