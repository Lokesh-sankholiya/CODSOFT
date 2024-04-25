// Initialize variables
let displayValue = "";
let operatorClicked = false;

// Get display element
const display = document.getElementById("display");

// Get all buttons
const buttons = document.querySelectorAll(".buttons button");

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    if (buttonValue === "C") {
      clearDisplay();
    } else if (buttonValue === "=") {
      calculate();
    } else {
      appendToDisplay(buttonValue);
    }
  });
});

// Function to append value to display
function appendToDisplay(value) {
  if (operatorClicked && isNaN(value)) {
    // Don't allow consecutive operators
    return;
  }

  displayValue += value;
  display.value = displayValue;

  if (!isNaN(value)) {
    operatorClicked = false;
  } else {
    operatorClicked = true;
  }
}

// Function to clear display
function clearDisplay() {
  displayValue = "";
  display.value = displayValue;
  operatorClicked = false;
}

// Function to perform calculation
function calculate() {
  try {
    const result = eval(displayValue);
    display.value = result;
    displayValue = result.toString();
    operatorClicked = true;
  } catch (error) {
    display.value = "Error";
  }
}
