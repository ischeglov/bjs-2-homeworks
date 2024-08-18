"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - (4 * a * c);
	if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	} else if (d === 0) {
		arr[0] = -b / (2 * a);
	} else {
		arr = [];
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let interestRate = parseInt(percent) / 100 / 12;
	let downPayment = parseInt(contribution);
	let totalСost = parseInt(amount);
	let loanTerm = parseInt(countMonths);

	if (isNaN(interestRate) || interestRate < 0) {
		return `"Процентная ставка" содержит неправильное значение "${percent}"`;
	} else if (isNaN(downPayment) || downPayment < 0) {
		return `"Начальный взнос" содержит неправильное значение "${contribution}"`;
	} else if (isNaN(totalСost) || totalСost < 0) {
		return `"Общая стоимость" содержит неправильное значение "${amount}"`;
	} else {
		if (isNaN(loanTerm) || loanTerm < 0) {
			return `"Cрок ипотеки" содержит неправильное значение "${countMonths}"`;
		}
	}
	let loanBody = totalСost - downPayment;
	let monthlPayment = loanBody * (interestRate + interestRate / (((1 + interestRate) ** loanTerm) - 1));
	let totalAmount = (monthlPayment * loanTerm).toFixed(2);
	return +totalAmount;
}