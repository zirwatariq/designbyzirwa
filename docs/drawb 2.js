/*
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
*/
       /* place the navigation on the page*/ 

	   function openNav() {
		var w = window.innerWidth;
		 /*var rem_font =  window.getComputedStyle(document.getElementById("page")).fontSize;
        var remW = w / Number(rem_font);*/
		if (w < 1120){
			document.getElementById("theDrawer").style.right = "0";
		}
		}
 /*place the navigation off the page */
	function closeNav() {
		document.getElementById("theDrawer").style.right = "-250px";
	}

	
