/*  Part 2: JavaScript Functions  */

// Function with parameters & return value
// Demonstrates local scope (area) vs global scope
function calculateArea(width, height) {
  let area = width * height; // local variable
  document.getElementById("result").textContent =
    `The area is: ${area}`;
  return area; // return value
}

// Global variable (can be accessed anywhere in this file)
let counter = 0;

// Function that modifies global variable
// Demonstrates how scope works
function incrementCounter(step) {
  counter += step;
  console.log("Counter is now:", counter);
  return counter;
}

/*Part 3: JS + CSS Integration  */

// Get reference to button
document.getElementById("triggerAnimation").addEventListener("click", () => {
  let box = document.querySelector(".js-box");

  // Reusable function to trigger animation on any element
  function triggerAnimation(element, className) {
    element.classList.add(className); // add animation class

    // remove after animation ends so it can be retriggered
    element.addEventListener("animationend", () => {
      element.classList.remove(className);
    }, { once: true }); // run only once
  }

  // Call function with our blue box
  triggerAnimation(box, "animate");
});
