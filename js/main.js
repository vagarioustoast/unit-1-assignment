let counter = document.getElementById("counter");
let incrementValue = document.getElementById("mathValue");
let addButton = document.getElementById("increment");
let subtractButton = document.getElementById("decrement");
let count = 0;

addButton.addEventListener("keyup", e => {
  incrementValue.setAttribute("value", incrementValue.value);
});

subtractButton.addEventListener("keyup", e => {
  incrementValue.setAttribute("value", incrementValue.value);
});

addButton.addEventListener("click", e => {
  incrementValue.value === ""
    ? null
    : (count += parseInt(incrementValue.value, 10));
  counter.innerHTML = count;
});
subtractButton.addEventListener("click", e => {
  incrementValue.value === ""
    ? null
    : (count -= parseInt(incrementValue.value, 10));
  counter.innerHTML = count;
});
