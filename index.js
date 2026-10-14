// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Function to reset the background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  document.getElementById('keyPressDisplay').textContent =
    `Key pressed: ${event.key}`;
}

// Process Text Input

// Function to display user input in real time
function displayUserInput() {
  const userInput = document.getElementById('textInput').value;

  document.getElementById('textInputDisplay').textContent =
    `You typed: ${userInput}`;
}

// Attach Event Listeners
function setupEventListeners() {
  // Change the background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor);

  // Reset the background color when the button is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor);

  // Display the key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress);

  // Display user input in real time as they type
  document
    .getElementById('textInput')
    .addEventListener('input', displayUserInput);
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

// Export functions for testing
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};