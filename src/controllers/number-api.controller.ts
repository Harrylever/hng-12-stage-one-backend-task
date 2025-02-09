import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import logger from '../config/logger';

export const getNumberFact = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { number } = req.query;

	if (!number || isNaN(Number(number))) {
		res.status(StatusCodes.BAD_REQUEST).json({
			number: 'alphabet',
			error: true,
		});
		return;
	}

	const response = await responseBuild(Number(number));
	res.status(StatusCodes.OK).json(response);
};

const responseBuild = async (
	num: number
): Promise<{
	number: number;
	is_prime: boolean;
	is_perfect: boolean;
	properties: string[];
	digit_sum: number;
	fun_fact: string;
}> => {
	const properties = [];

	if (isArmstrongNumber(num)) properties.push('armstrong');
	properties.push(num % 2 === 0 ? 'even' : 'odd');

	const funFact = await getFunFact(Number(num));

	return {
		number: num,
		is_prime: isPrime(Number(num)),
		is_perfect: isPerfectNum(Number(num)),
		properties,
		digit_sum: sumDigits(Number(num)),
		fun_fact: funFact,
	};
};

function isPrime(num: number): boolean {
	if (num < 2) return false;

	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}

	return true;
}

function isPerfectNum(num: number): boolean {
	if (num < 2) return false;

	let sum = 1;

	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			sum += i; // add divisor i
			const correspondingDivisor = num / i;
			if (i !== correspondingDivisor) {
				sum += correspondingDivisor;
			}
		}
	}

	return sum === num;
}

function isArmstrongNumber(num: number): boolean {
	const numStr = num.toString();
	const numDigits = numStr.length;
	let sum = 0;

	for (const digit of numStr) {
		sum += Math.pow(parseInt(digit), numDigits);
	}

	return sum === num;
}

function sumDigits(num: number): number {
	return Math.abs(num) // Handle negative numbers
		.toString() // Convert number to string
		.split('') // Split into individual digits
		.reduce((sum, digit) => sum + parseInt(digit), 0); // Sum digits
}

async function getFunFact(num: number): Promise<string> {
	try {
		const res = await fetch(`http://numbersapi.com/${num}/math`);
		const result = await res.text();
		return result;
	} catch (error) {
		logger.error(`Error fetching fun fact for ${num}: ${error}`);
		return `No fun fact found for ${num}`;
	}
}
