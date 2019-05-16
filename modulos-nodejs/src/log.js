factorial = (num) => {
    if (num <= 0) return 1;
    return (num * factorial(num - 1));
}

console.log('====================================');
console.log('Factorial : ', factorial(6));
console.log('====================================');