let counter = document.getElementById("counter");
let incrementValue = document.getElementById("mathValue");
let addButton = document.getElementById("increment");
let subtractButton = document.getElementById("decrement");
let count = 0;

// Subtract Button Attribute
addButton.addEventListener("keyup", e => {
  incrementValue.setAttribute("value", incrementValue.value);
});

// Subtract Button Functionality
addButton.addEventListener("click", e => {
  incrementValue.value === ""
    ? null
    : (count += parseInt(incrementValue.value, 10));
  counter.innerHTML = count;
});

// Subtract Button Attribute
subtractButton.addEventListener("keyup", e => {
  incrementValue.setAttribute("value", incrementValue.value);
});

// Subtract Button Functionality
subtractButton.addEventListener("click", e => {
  incrementValue.value === ""
    ? null
    : (count -= parseInt(incrementValue.value, 10));
  counter.innerHTML = count;
});
