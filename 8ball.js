// Sandbox

// HTML Variables
let clickBtnEl = document.getElementById("btn");
let answerEl = document.getElementById("answer")

// Add Event Listener to Button
clickBtnEl.addEventListener("click", doStuff);

// Event Function
function doStuff() {
    let randNum = Math.random();

    if (randNum < 0.2) {
        answerEl.innerHTML = "Without a Doubt.";
    } else if (randNum < 0.4) {
        answerEl.innerHTML = "As I see it, yes.";
    } else if (randNum < 0.6) {
        answerEl.innerHTML = "Concentrate and ask again.";
    } else if (randNum < 0.8) {
        answerEl.innerHTML = "Don't count on it.";
    } else if (randNum < 1) {
        answerEl.innerHTML = "Outlook not so good.";
    }
}