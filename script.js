let stopwatchInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

let count = 0;
let total = 0;
let intervalMS = 0;

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
  document.getElementById('count').textContent = "Count : " + count;  // update count
  document.getElementById('total').textContent = "Total : " + total;  // update total
  document.getElementById('interval').textContent = "Interval : " + intervalMS + " ms";  // update total


}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

function startStopwatch(interval, increment = 0, decrement = 0) {
  // Clear the existing interval
  stopStopwatch();
  total = total + count;
  count = 0;

  // Set the new interval
  intervalMS = interval + increment - decrement;
  currentInterval = intervalMS;

  // Start a new interval
  stopwatchInterval = setInterval(function () {
    count++;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateDisplay();
  }, currentInterval); // update every specified interval in milliseconds
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function incremental(increment) {
  startStopwatch(intervalMS, increment, 0);
}

function decremental(decrement) {
  if (intervalMS > 50) {
    startStopwatch(intervalMS, 0, decrement);
  }
}



function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  minutes = 0;
  hours = 0;
  count = 0;
  total = 0;
  intervalMS = 0;
  updateDisplay();
}
