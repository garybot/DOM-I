const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');
const secondOnes = document.getElementById('secondOnes');
const secondTens = document.getElementById('secondTens');
secondTens.textContent = "0";
secondOnes.textContent = "0";
msTens.textContent = "0";
msHundreds.textContent = "0";
const digits = document.querySelector('.digits');

const buttons = document.createElement('div');
document.body.appendChild(buttons);
const startButton = document.createElement('button');
const resetButton = document.createElement('button');
startButton.textContent = "Start";
resetButton.textContent = "Reset";
buttons.appendChild(startButton);
buttons.appendChild(resetButton);

let start;
startButton.addEventListener('click', () => {
	start = window.setInterval(timer, 10);
	startButton.disabled = "true";
});

resetButton.addEventListener('click', () => {
	clearInterval(start);
	startButton.disabled = '';
	secondTens.textContent = "0";
	secondOnes.textContent = "0";
	msTens.textContent = "0";
	msHundreds.textContent = "0";
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
				digits.classList.toggle("redDigit");
				secondOnes.textContent = "0";
				secondTens.textContent = "1";
				startButton.disabled = "";
				clearInterval(start);

			}
		}
	}
}
