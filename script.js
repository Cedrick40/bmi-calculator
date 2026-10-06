// Get the elements from the page
const form = document.getElementById("bmi-form");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const errorText = document.getElementById("error");
const resultBox = document.getElementById("result");
const bmiValue = document.getElementById("bmi-value");
const bmiCategory = document.getElementById("bmi-category");
const bmiMessage = document.getElementById("bmi-message");

// BMI = weight (kg) divided by height (m) squared
function calculateBMI(weightKg, heightCm) {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

// Choose the category with if / else (WHO classification)
function getCategory(bmi) {
  if (bmi < 18.5) {
    return { name: "Underweight", className: "underweight", message: "Your BMI is below the healthy range (under 18.5)." };
  } else if (bmi < 25) {
    return { name: "Normal weight", className: "normal", message: "Your BMI is in the healthy range (18.5 to 24.9)." };
  } else if (bmi < 30) {
    return { name: "Overweight", className: "overweight", message: "Your BMI is above the healthy range (25 to 29.9)." };
  } else {
    return { name: "Obese", className: "obese", message: "Your BMI is well above the healthy range (30 or more)." };
  }
}

// Show an error and hide any old result
function showError(text) {
  errorText.textContent = text;
  resultBox.hidden = true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();          // stop the page from reloading
  errorText.textContent = "";

  const heightText = heightInput.value.trim();
  const weightText = weightInput.value.trim();

  // Validation 1: empty values
  if (heightText === "" || weightText === "") {
    showError("Please enter both your height and your weight.");
    return;
  }

  const height = Number(heightText);
  const weight = Number(weightText);

  // Validation 2: must be real numbers
  if (!isFinite(height) || !isFinite(weight)) {
    showError("Please enter numbers only (use a dot for decimals).");
    return;
  }

  // Validation 3: zero and negative values
  if (height <= 0 || weight <= 0) {
    showError("Height and weight must be greater than zero.");
    return;
  }

  // Validation 4: realistic ranges
  if (height < 50 || height > 300) {
    showError("Please enter a height between 50 and 300 cm.");
    return;
  }
  if (weight < 2 || weight > 500) {
    showError("Please enter a weight between 2 and 500 kg.");
    return;
  }

  // Calculate, round to 1 decimal, then pick the category from the rounded value
  const bmi = Number(calculateBMI(weight, height).toFixed(1));
  const category = getCategory(bmi);

  // Show the result
  bmiValue.textContent = bmi.toFixed(1);
  bmiCategory.textContent = category.name;
  bmiMessage.textContent = category.message;
  resultBox.className = "result " + category.className;
  resultBox.hidden = false;
});