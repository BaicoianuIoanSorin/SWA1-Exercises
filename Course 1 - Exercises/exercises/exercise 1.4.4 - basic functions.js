// a) Make a function, factorial, that takes a value n and returns n!
function factorial(value) {
    let factorial = 1;
    for(let i = 1; i <= value; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorial(4)); // Output: 24

// b) Make a function, power, that takes values m and n and returns m at the power of n

function power(m, n) {
    let powerResult = 1;
    for(let i = 1; i <= m; i++) {
        powerResult *= n;
    }
    return powerResult;
}

console.log(power(2,4)); // Output: 16