document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("input-field");
  const buttons = document.querySelectorAll(".calc-table td");

  let currentInput = "";
  let memory = "";
  let operator = "";

  function updateInput(value) {
    inputField.value += value;
    currentInput += value;
  }

  function clearInput() {
    inputField.value = "";
    currentInput = "";
    memory = "";
    operator = "";
  }

  function handleButtonClick(value) {
    switch (value) {
      case "AC":
        clearInput();
        break;
      case "C":
        inputField.value = inputField.value.slice(0, -1);
        currentInput = currentInput.slice(0, -1);
        break;
      case "=":
        if (operator && memory && currentInput) {
          const result = calculate(
            parseFloat(memory),
            parseFloat(currentInput),
            operator
          );
          inputField.value = result.toString();
          currentInput = result.toString();
          memory = "";
          operator = "";
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        if (currentInput) {
          if (operator && memory && currentInput) {
            const result = calculate(
              parseFloat(memory),
              parseFloat(currentInput),
              operator
            );
            inputField.value = result.toString();
            currentInput = result.toString();
            memory = result.toString();
          } else {
            memory = currentInput;
          }
          operator = value;
          inputField.value += value;
          currentInput = "";
        }
        break;
      default:
        updateInput(value);
    }
  }

  function calculate(num1, num2, op) {
    switch (op) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          return "Error";
        }
        return num1 / num2;
      default:
        return num2;
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      handleButtonClick(button.textContent);
    });
  });

  document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (
      !isNaN(key) ||
      key === "." ||
      key === "+" ||
      key === "-" ||
      key === "*" ||
      key === "/" ||
      key === "%"
    ) {
      handleButtonClick(key);
    } else if (key === "Enter") {
      handleButtonClick("=");
    } else if (key === "Backspace") {
      handleButtonClick("C");
    } else if (key === "Escape") {
      handleButtonClick("AC");
    }
  });
});
