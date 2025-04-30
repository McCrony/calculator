// Declare variables
let currentInput = ""; // This will store the current number being input by the user
let previousInput = ""; // This will store the first number before operator is pressed
let operator = ""; // Store the operator (+, -, *, /)

let display = document.querySelector('.display');
let buttons = document.querySelectorAll('input[type="button"]');


// Function to update the display
function updateDisplay() {
  display.textContent = currentInput;
}

// Handle number button clicks
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    // const value = e.target.value;
    const value = button.value;  
    
    // If the value is a number, add it to the current input
     
    if (button.value >= '0' && button.value <= '9') {
      let inpuvalue = parseInt(button.value)
      currentInput += inpuvalue;
      console.log(typeof currentInput )
      updateDisplay();
    }
    
    // If an operator is pressed, store the current input and the operator
    if (button.value === "+" || button.value === "-" || button.value === "*" || button.value === "/") {
      if (currentInput === ""){
        alert('Enter a number first');
        return
      } // Prevent operator without a number
      previousInput = currentInput;
      operator = button.value;
      currentInput = "";
    }
    
    // If equals button is pressed, perform the operation
    if (button.value === "=") {
      if (previousInput === "" || currentInput === "") return; // Ensure both numbers are entered
      switch (operator) {
        case '+':
          Addition();
          break;
      
        default:
          break;
      }
      // currentInput = operate(operator, parseFloat(previousInput), parseFloat(currentInput)).toString();
      updateDisplay();
      previousInput = ""; // Reset previous input
      operator = ""; // Reset operator
    }
    
    // Handle clear button
    if (button.value === "C") {
      currentInput = "";
      previousInput = "";
      operator = "";
      updateDisplay();
    }


    function Addition(previousInput, currentInput){
      let prev = parseFloat(previousInput); 
      let curr = parseFloat(currentInput); 
      let sum =prev + curr;
      console.log(sum);
      console.log(typeof prev)
    }

  });
});



function subtraction(previousInput, currentInput){
  return previousInput - currentInput;
}

function division(previousInput, currentInput){
  return previousInput / currentInput;
}

function Multiplication(previousInput, currentInput){
  return previousInput * currentInput;
}

function percentage(previousInput, currentInput){
  return (previousInput/100) * currentInput;
}

