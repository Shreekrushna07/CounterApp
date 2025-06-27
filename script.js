let counter = document.getElementById("counter");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("reset");

let count = 0;

// Utility function to trigger animation
function triggerAnimation() {
    counter.classList.remove("animate");
    void counter.offsetWidth; // Forces reflow
    counter.classList.add("animate");
}

function increment() {
    count += 1;
    counter.innerHTML = count;
    triggerAnimation(); // Animate on update
}

function decrement() {
    count -= 1;
    counter.innerHTML = count;
    triggerAnimation();
}

function reset() {
    count = 0;
    counter.innerHTML = count;
    triggerAnimation();
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);
