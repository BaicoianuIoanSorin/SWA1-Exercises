// a) Make a loop that prints (using console.log) the numbers from 1 to 10
let arrayFrom1To10 = [1,2,3,4,5,6,7,8,9,10];
arrayFrom1To10.forEach(number => {
    console.log(number);
})

// b) Make a loop that adds the numbers from 1 to 10
let sum = 0;
arrayFrom1To10.map(number => {
    sum += Number(number);
})
console.log("Sum of first them numbers: " + sum);

// c) Make a loop that computes 10! (factorial)
let factorial10 = 1;
arrayFrom1To10.map(number => {
    factorial10 *= Number(number);
})
console.log(" Factorial from 10: " + factorial10);