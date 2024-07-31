"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant < 0) {
		arr = [];
		return arr;
	}
	if (discriminant == 0) {
		let toEqual1 = -b / (2 * a);
		arr = [toEqual1];
		return arr;
	}
	if (discriminant > 0) {
		let toEqual1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let toEqual2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr = [toEqual1, toEqual2];
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let interestRate = percent / 100 / 12;
	let loanBody = amount - contribution;
	let payment = loanBody * (interestRate + interestRate / ((1 + interestRate) ** countMonths - 1));
	let totalAmount = +(payment * countMonths).toFixed(2);
	return totalAmount;
}