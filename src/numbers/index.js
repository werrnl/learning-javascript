export function sumNumbers(a, b) {
    return Math.round (a + b);
}

export function isEven(number) {
    return number % 2 === 0;
}

export function isOdd(number) {
    return number % 2 !== 0;
}

export function absoluteValue(number) {
    return Math.abs(number);
}

export function maxNumber(numbers) {
    return Math.max(...numbers);
}

export function minNumber(numbers) {
    return Math.min(...numbers);
}