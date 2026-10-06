# BMI Calculator

A simple BMI (Body Mass Index) calculator. The user enters their height and weight and gets their BMI and category. Built for Task 6 (BMI Calculator) of my Web Development internship.

**Live page:** https://cedrick40.github.io/bmi-calculator/

## About the project

The page has two input fields, height (cm) and weight (kg), and a Calculate button. It shows the BMI rounded to one decimal place, the category, and a short message. Empty and invalid values are caught and explained, so they never break the page.

## Objective

To practice form handling, calculations, validation, and conditional output.

## Tools used

- HTML5
- CSS3
- JavaScript
- VS Code
- Git and GitHub (free)

## Features

- Height (cm) and weight (kg) input fields
- BMI calculation: weight in kg divided by height in meters squared
- BMI rounded to one decimal place
- Category display using the WHO classification:

| BMI | Category |
| --- | --- |
| Below 18.5 | Underweight |
| 18.5 to 24.9 | Normal weight |
| 25 to 29.9 | Overweight |
| 30 or more | Obese |

- Validation with a clear message for each case:
  - Empty height or weight
  - Values that are not numbers
  - Zero or negative values
  - Unrealistic values (height outside 50 to 300 cm, weight outside 2 to 500 kg)
- Each category has its own color, and the result stays hidden until there is a valid result
- A note that BMI is a general guide and not a medical diagnosis
- Responsive layout for desktop and mobile

## How it works

1. `document.getElementById` selects the form, the inputs, the error message, and the result elements.
2. The form's `submit` event runs the main function, and `event.preventDefault()` stops the page from reloading.
3. The function trims both values and checks them in order: empty, not a number (`isFinite`), zero or negative, and outside the realistic range. On any failure, `showError()` shows a message and hides the old result.
4. `calculateBMI()` converts the height to meters and returns `weight / (height × height)`.
5. The BMI is rounded to one decimal with `toFixed(1)`, and the category is chosen from the **rounded** value, so the number shown always matches its label.
6. `getCategory()` uses `if / else if / else` conditions to return the category name, a CSS class, and a message.
7. The result is written to the page with `textContent`, and the result box is shown by setting `hidden` to `false`.

## Styling

A soft blue-white page with a white card and a blue top edge, large inputs with the units (cm, kg) inside the boxes, a blue focus outline, a blue Calculate button, and a colored left edge on the result for each category. A media query for small screens reduces the padding and heading size.

## Project structure

```
bmi-calculator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Outcome

A clean, working BMI calculator that validates input, shows a clear result and category, and works on desktop and mobile. This task taught me how to handle a form with JavaScript, validate numbers step by step, round decimals, and show different output with conditions.

## Author

Cedrick Niyibikora
