// Declare variables
let currentInput = ""; // This will store the current number being input by the user
let previousInput = ""; // This will store the first number before operator is pressed
let operator = ""; // Store the operator (+, -, *, /)

// Access DOM elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

// Function to update the display
function updateDisplay() {
  display.value = currentInput;
}

// Handle number button clicks
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;
    
    // If the value is a number, add it to the current input
    if (value >= '0' && value <= '9') {
      currentInput += value;
      updateDisplay();
    }
    
    // If an operator is pressed, store the current input and the operator
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (currentInput === "") return; // Prevent operator without a number
      previousInput = currentInput;
      operator = value;
      currentInput = "";
    }
    
    // If equals button is pressed, perform the operation
    if (value === "=") {
      if (previousInput === "" || currentInput === "") return; // Ensure both numbers are entered
      currentInput = operate(operator, parseFloat(previousInput), parseFloat(currentInput)).toString();
      updateDisplay();
      previousInput = ""; // Reset previous input
      operator = ""; // Reset operator
    }
    
    // Handle clear button
    if (value === "C") {
      currentInput = "";
      previousInput = "";
      operator = "";
      updateDisplay();
    }
  });
});
