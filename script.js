const inputNumber = document.getElementById("input-number");
const checkButton = document.getElementById("check-button");
const result = document.getElementById("result");

checkButton.addEventListener("click", function() {
  const number = parseInt(inputNumber.value);
  if (isNaN(number)) {
    result.textContent = "Please enter a valid number.";
  } else if (number % 2 === 0) {
    result.textContent = `The number ${number} is even.`;
  } else {
    result.textContent = `The number ${number} is odd.`;
  }
});
