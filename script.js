// Arthemtic Opreators
let a = 10;
let b = 20;
// Addition
console.log(`Addition of Two numbers: ${a + b}`);
// Subtraction
console.log(`Subtraction of Two numbers: ${a - b}`);
// Multiplication
console.log(`Multiplication of Two numbers: ${a * b}`);
// Division
console.log(`Division of Two numbers: ${a / b}`);
// Modulus
console.log(`Modulus of Two numbers: ${a % b}`);

// Assignment Opreators
// = Opreator
let c = 30;
// += Opreator
c += 10;
console.log(`Addition Assignment: ${c}`);
// -= Opreator
c -= 5;
console.log(`Subtraction Assignment: ${c}`);
// *= Opreator
c *= 2;
console.log(`Multiplication Assignment: ${c}`);
// /= Opreator
c /= 3;
console.log(`Division Assignment: ${c}`);
// %= Opreator
c %= 4;
console.log(`Modulus Assignment: ${c}`);

// Comparison Opreators
let x = 23;
let y = 30;
// Equal To == Opreator
console.log(x == y);
// Strict Equal to (===)
console.log(x === y);
// Not equal to (!=) Opreator
console.log(x != y);
// Strict Not equal to (!==) Opreator
console.log(x !== y);
// Greater than (>) Opreator
console.log(x > y);
// Less than (<) Opreator
console.log(x < y);
// Greater than or equal to (>=) Opreator
console.log(x >= y);
// Less than or equal to (<=) Opreator
console.log(x <= y);

// Expression Using Varaibles And Operators
let marks = 85;
let marks2 = 90;
let totalMarks = marks + marks2;
console.log(`Total Marks: ${totalMarks}`);

let price = 100;
let quantity = 5;
let totalPrice = price * quantity;
console.log(`Total Price: ${totalPrice}`);

// Practical Task
// Comparing a number and a string shows the difference between loose equality and strict equality.
// == compares values after converting (coercing) them to the same type.
// So, "10" == 10 is true because JavaScript converts the string "10" to the number 10.
// === compares both the value and the type.
// So, "10" === 10 is false because one is a string and the other is a number.
let number = 10;
let string = "10";
console.log(number == string); // true
console.log(number === string); // false
