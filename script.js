const numbers = document.querySelectorAll(".numbers");
const result = document.querySelector(".result span"); // Changed to target the span element
const signs = document.querySelectorAll(".item3.sign"); // Corrected selector
const equal = document.querySelector(".equals"); // Corrected selector
const clear = document.querySelector(".clear");
const negative = document.querySelector(".negative");
const percent = document.querySelector(".persent"); // Corrected spelling

let firstValue = "";
let secondValue = "";
let sign = "";

numbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    const val = e.target.getAttribute("value");
    if (sign === "") {
      firstValue += val;
      result.textContent = firstValue;
    } else {
      secondValue += val;
      result.textContent = secondValue;
    }
  });
});

signs.forEach((button) => {
  button.addEventListener("click", (e) => {
    sign = e.target.getAttribute("value");
  });
});

equal.addEventListener("click", () => {
  result.textContent = "";
  let resultValue = 0;
  const num1 = parseFloat(firstValue);
  const num2 = parseFloat(secondValue);

  switch (sign) {
    case "+":
      resultValue = num1 + num2;
      break;
    case "-":
      resultValue = num1 - num2;
      break;
    case "x":
      resultValue = num1 * num2;
      break;
    case "/":
      resultValue = num1 / num2;
      break;
    default:
      resultValue = 0;
  }

  result.textContent = resultValue;
  firstValue = resultValue.toString();
  secondValue = "";

  checkResultLength();
});

const checkResultLength = () => {
  if (result.textContent.length >= 8) {
    result.textContent = parseFloat(result.textContent).toFixed(5);
  }
};

negative.addEventListener("click", () => {
  result.innerHTML = "";
  if (firstValue != "") {
    resultValue = -firstValue;
    firstValue = resultValue;
  }
  if (firstValue != "" && secondValue != "" && sign != "") {
    resultValue = -resultValue;
  }
  result.innerHTML = resultValue;
});

percent.addEventListener("click", () => {
  result.innerHTML = "";
  if (firstValue != "") {
    resultValue = firstValue / 100;
    firstValue = resultValue;
  }
  if (firstValue != "" && secondValue != "" && sign != "") {
    resultValue = resultValue / 100;
  }
  result.innerHTML = resultValue;
});

clear.addEventListener("click", () => {
  result.textContent = "0"; // Reset the result display to "0"

  // Reset all values
  firstValue = "";
  secondValue = "";
  sign = "";
});
