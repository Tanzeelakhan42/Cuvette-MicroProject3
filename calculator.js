const display = document.getElementById("display");
let currentInput = "";

// Add event listeners to all buttons
document.querySelectorAll(".numeric-button").forEach((button) => {
  console.log("numeric button", button);
  button.addEventListener("click", (event) => {
    const value = event.target.innerText;
    currentInput += value;
    display.innerText = currentInput;
  });
});

// Handle DEL button
document.querySelector(".del-button").addEventListener("click", () => {
  currentInput = currentInput.toString(); // Ensure currentInput is a string
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || "0";
});

// Handle RESET button
document.querySelector(".reset-button").addEventListener("click", () => {
  currentInput = "";
  display.innerText = "0";
});

// Handle = button for calculating the result
document.querySelector(".equal-to-button").addEventListener("click", () => {
  try {
    currentInput = eval(currentInput).toString();
    display.innerText = currentInput;
  } catch (error) {
    display.innerText = "Error";
    currentInput = "";
  }
});
