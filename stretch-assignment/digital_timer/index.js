const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');
const secondOnes = document.getElementById('secondOnes');
const secondTens = document.getElementById('secondTens');
const digits = document.querySelector('.digits');

let start;
const startButton = document.querySelector('.start');
startButton.addEventListener('click', () => {
  start = window.setInterval(timer, 10);
  startButton.disabled = "true";
});

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
  clearInterval(start);
  digits.classList.remove('redDigit');
  secondTens.textContent = "0";
  secondOnes.textContent = "0";
  msTens.textContent = "0";
  msHundreds.textContent = "0";
  startButton.disabled = '';
});

function timer() {
  if (Number(msTens.textContent) < 9) {
    msTens.textContent = Number(msTens.textContent) + 1;
  } else {
    msTens.textContent = "0";
    if (Number(msHundreds.textContent) < 9) {
      msHundreds.textContent = Number(msHundreds.textContent) + 1;
    } else {
      msHundreds.textContent = "0";
      if (Number(secondOnes.textContent) < 9) {
        secondOnes.textContent = Number(secondOnes.textContent) + 1;
      } else {
        clearInterval(start);
        secondOnes.textContent = "0";
        secondTens.textContent = "1";
        digits.classList.add("redDigit");
      }
    }
  }
}
