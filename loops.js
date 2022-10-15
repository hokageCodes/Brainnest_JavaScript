function largerOfTwoIntegers(num1, num2) {
    if(num1 > num2) {
        return `${num1} is greater than ${num2}`
    } else if(num2 > num1) {
        return `${num2} is greater than ${num1}`;
    } else {
        return `${num1} and ${num2} are the same numbers`;
    }
}
console.log(largerOfTwoIntegers(0, 0));

function evenOrOdd(number) {
    if(number % 2 === 0) {
        return `${number} is an even number`
    } else {
        return `${number} is an odd number`;
    }
}
console.log(evenOrOdd(8));