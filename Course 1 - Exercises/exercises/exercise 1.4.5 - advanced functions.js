function factorial(value) {
    let factorial = 1;
    for(let i = 1; i <= value; i++) {
        factorial *= i;
    }
    return factorial;
}

function power(m, n) {
    let powerResult = 1;
    for(let i = 1; i <= n; i++) {
        powerResult *= m;
    }
    return powerResult;
}


function advancedFunctions(m, n) {
    if(n === undefined) {
        return factorial(m);
    }
    return power(m,n);
}

console.log(advancedFunctions(10)); // if you call the function with only one argument, it returns the factorial of 10, which is 3628800
console.log(advancedFunctions(10,2)); // if you call the function with two arguments, it returns the 10 to the power of 2, which is 100