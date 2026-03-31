let count = 0;
let target = 1100;
const counterEl = document.getElementById("values_increament");

function startCounter() {
  let interval = setInterval(() => {
    count++;
    counterEl.innerText = count;

    if (count >= target) {
      clearInterval(interval);
    }
  }, 0.1);
}

window.onload = startCounter;