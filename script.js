// Declare variables
let currentInput = ""; 
let previousInput = ""; 
let operator = ""; // Operators (+, -, *, /)
let isResult = false

let display = document.querySelector('.display');
let buttons = document.querySelectorAll('input[type="button"]');


// Handle number button clicks
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const value = button.value;  
    
    // If the value is a number, add it to the current input
    if (button.value >= '0' && button.value <= '9') {
      if (isResult) {
        currentInput = value; // Start fresh after result
        isResult = false; // Reset result flag
      }else {
        currentInput += value;
      }
      updateDisplay();
    }
    
    // If an operator is pressed, store the current input and the operator
    if (button.value === "+" || button.value === "-" || button.value === "*" || button.value === "/") {
      if (previousInput !== "") {
        operator = value;  
        currentInput = previousInput; 
        updateDisplay();

        // Prevent operator without a number
        if (currentInput === ""){
          alert('Enter a number first');
          return
        }
      } 

      if (isResult) {
        previousInput = currentInput;
        isResult = false;
      }else{
        previousInput = currentInput;
      }
      operator = value;
      currentInput = "";
    }
    
    
    // If equals button is pressed, perform the operation
    if (button.value === "=") {
      if (previousInput === "" || currentInput === "")return; // Ensure both numbers are entered
      
      currentInput = operate(operator, parseFloat(previousInput), parseFloat(currentInput)).toString();
      updateDisplay();
      isResult = true;
      previousInput = "";
      operator = "";
    }
    
    // Handle clear button
    if (button.value === "C") {
      currentInput = "";
      previousInput = "";
      operator = "";
      updateDisplay();
    }
  });
});

//Function to handle operations
function operate(operator, previousInput, currentInput) {
  switch (operator) {
    case '+':
      return (previousInput + currentInput);
    case '-':
      return (previousInput - currentInput);
    case '*':
      return (previousInput * currentInput);
    case '/':
      if (currentInput === 0) return "Error";
      return (previousInput / currentInput);
    default:
      return currentInput;
  }
}


// Function to update the display
function updateDisplay() {
  display.textContent = currentInput ;

  if(display.textContent.length > 13) {
    display.textContent = display.textContent.substring(0, 13);
}
}
