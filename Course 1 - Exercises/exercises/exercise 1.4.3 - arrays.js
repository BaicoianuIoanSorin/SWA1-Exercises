var a = [1,2,3,5,8] // creates an array

a.length // is the length of the array (5)

// a[0], ..., a[4] are the elements of the array

// a) What's a[5]?
console.log(a[5]);

// b) Make a loop that prints the elements of a
console.log("Elements of a array");
a.forEach(number => console.log(number));

// c) Make a loop that adds the elements of a
let sum = 0;
a.forEach(number => sum += Number(number));
console.log("Sum of array a: " + sum); // Output: 11

// d) Make a function that takes an array and returns the sum of its elements
function sumArray(array) {
    let sum = 0;
    a.forEach(number => sum += Number(number));
    return sum;
}

// e) Add an element to a like this: a[8] == 55;
a[8] = 55;
console.log(a); // [ 1, 2, 3, 5, 8, <3 empty items>, 55 ]

// f) What's a[8]?
console.log(a[8]) // 55;

// g) What's the length of a?
console.log(a.length); // 9

// h) What happens if you print a to the console?
// it prints out the whole array
console.log(a); // Output: [ 1, 2, 3, 5, 8, <3 empty items>, 55 ]

// i) What happens with your loop from (c)?
// It becomes 19


