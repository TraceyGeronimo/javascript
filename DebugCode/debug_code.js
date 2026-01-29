function performOperation() {
  //get operation to perform
  const selectElement = document.getElementById("operation");
  const operation = selectElement.value;

  debugger;

  // Get user input from input fields
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);

  let result;

  // Check if inputs are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    //check which operations and perform
    switch (operation) {
      case "add":
        result = add(num1, num2);
        break;
      case "multiply":
        result = multiply(num1, num2);
        break;
      case "divide":
        result = divide(num1, num2);
        break;
    }

    // Display the result
    displayResult(result);
  } else {
    displayResult("Please enter valid numbers");
  }
}

function multiply(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  // Multiply the numbers
  return a * b;
}

function add(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  // add the numbers
  return a + b;
}

function divide(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  // divide the numbers
  return a / b;
}

function displayResult(result) {
  // Display the result in the paragraph element
  const resultElement = document.getElementById("result");
  resultElement.textContent = `The result is: ${result}`;
}
