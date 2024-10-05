let redLight = document.getElementById('red-light');
let yellowLight = document.getElementById('yellow-light');
let greenLight = document.getElementById('green-light');

let interval = 3000; // 3 seconds

function changeLight() {
  redLight.classList.toggle('active');
  yellowLight.classList.toggle('active');
  greenLight.classList.toggle('active');
}

function startTrafficLight() {
  redLight.classList.add('active');
  setInterval(() => {
    // Red to Yellow
    redLight.classList.remove('active');
    yellowLight.classList.add('active');
    setTimeout(() => {
      // Yellow to Green
      yellowLight.classList.remove('active');
      greenLight.classList.add('active');
      setTimeout(() => {
        // Green to Red
        greenLight.classList.remove('active');
        redLight.classList.add('active');
      }, interval);
    }, interval);
  }, interval * 2);
}

startTrafficLight();

