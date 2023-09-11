// Which of the following are truthy?

console.log(" a) 2 + 2 === 4 R: " + (2 + 2 === 4)) // true
console.log(" b) 2 + 2 === '4' R: " + (2 + 2 === '4')) // false
console.log(" c) 2 + 2 == '4' R: " + (2 + 2 == '4')) // true
console.log(" d) Number('4') R: " + Number('4')) // 4
console.log(" e) Number('0') R: " + Number('0')) // 0
console.log(" f) NaN R: " + NaN) // NaN
console.log(" g) NaN === NaN R: " + NaN === NaN) // false
console.log(" h) NaN !== NaN R: " + NaN !== NaN) // true
console.log(" i) Infinity === Infinity R: " + Infinity === Infinity) // false
console.log(" j) 1/0 == 2/0 R: " + 1/0 == 2/0) // false
console.log(" k) 2 * null R: " + 2 * null) // 0
console.log(" l) 2 + null R: " + 2 + null) // 2null
console.log(" m) 7 R: " + 7) // 7
console.log(" n) null || 7 R: " + null || 7) // null
console.log(" o) '4' R: " + '4') // 4
console.log(" p) '' R: " + '') // (blank)