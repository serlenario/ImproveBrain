'use strict';

const amountExpression = 30;
let correctResults = [];

for (let i = 0; i < amountExpression; i++) {
	let operator = Math.trunc(Math.random() * 3) + 1;

	if (operator === 3) {
		const number1 = Math.trunc(Math.random() * 15) + 1;
		let number2 = Math.trunc(Math.random() * 15) + 1;

		while (true) {
			number2 = Math.trunc(Math.random() * 15) + 1;

			if (number1 >= number2) {
				break;
			} else {
				continue;
			}
		}

		if (operator === 1) {
			operator = '+';
			correctResults.push(number1 + number2);
		} else if (operator === 2) {
			operator = '-';
			correctResults.push(number1 - number2);
		} else {
			operator = '*';
			correctResults.push(number1 * number2);
		}

		document.querySelector(
			`.expression-${i}`
		).textContent = `${number1} ${operator} ${number2} `;
	} else {
		const number1 = Math.trunc(Math.random() * 20) + 1;
		let number2 = Math.trunc(Math.random() * 20) + 1;

		while (true) {
			number2 = Math.trunc(Math.random() * 20) + 1;

			if (number1 >= number2) {
				break;
			} else {
				continue;
			}
		}

		if (operator === 1) {
			operator = '+';
			correctResults.push(number1 + number2);
		} else if (operator === 2) {
			operator = '-';
			correctResults.push(number1 - number2);
		} else {
			operator = '*';
			correctResults.push(number1 * number2);
		}

		document.querySelector(
			`.expression-${i}`
		).textContent = `${number1} ${operator} ${number2} `;
	}
}

document.querySelector('.check-results').addEventListener('click', function () {
	// const inputNumber0 = Number(document.querySelector('input-0').value);
	// const inputNumber1 = Number(document.querySelector('input-1').value);

	for (let i = 0; i < correctResults.length; i++) {
		if (document.querySelector(`.input-${i}`).value === '') {
			document.querySelector(`.result-${i}`).textContent = '-';
			document.querySelector(`.result-${i}`).style.color = 'red';
		} else if (
			correctResults[i] == document.querySelector(`.input-${i}`).value
		) {
			document.querySelector(`.result-${i}`).textContent = '+';
			document.querySelector(`.result-${i}`).style.color = 'rgb(9, 250,21)';
		} else {
			document.querySelector(`.result-${i}`).textContent = '-';
			document.querySelector(`.result-${i}`).style.color = 'red';
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	for (let i = 0; i < document.querySelectorAll('input').length; i++) {
		document.querySelectorAll('input')[i].value = '';
	}

	for (let i = 0; i < amountExpression; i++) {
		document.querySelector(`.result-${i}`).textContent = '';
	}

	correctResults = [];

	for (let i = 0; i < amountExpression; i++) {
		let operator = Math.trunc(Math.random() * 3) + 1;

		if (operator === 3) {
			const number1 = Math.trunc(Math.random() * 15) + 1;
			let number2 = Math.trunc(Math.random() * 15) + 1;

			while (true) {
				number2 = Math.trunc(Math.random() * 15) + 1;

				if (number1 >= number2) {
					break;
				} else {
					continue;
				}
			}

			if (operator === 1) {
				operator = '+';
				correctResults.push(number1 + number2);
			} else if (operator === 2) {
				operator = '-';
				correctResults.push(number1 - number2);
			} else {
				operator = '*';
				correctResults.push(number1 * number2);
			}

			document.querySelector(
				`.expression-${i}`
			).textContent = `${number1} ${operator} ${number2} `;
		} else {
			const number1 = Math.trunc(Math.random() * 20) + 1;
			let number2 = Math.trunc(Math.random() * 20) + 1;

			while (true) {
				number2 = Math.trunc(Math.random() * 20) + 1;

				if (number1 >= number2) {
					break;
				} else {
					continue;
				}
			}

			if (operator === 1) {
				operator = '+';
				correctResults.push(number1 + number2);
			} else if (operator === 2) {
				operator = '-';
				correctResults.push(number1 - number2);
			} else {
				operator = '*';
				correctResults.push(number1 * number2);
			}

			document.querySelector(
				`.expression-${i}`
			).textContent = `${number1} ${operator} ${number2} `;
		}
	}
});
