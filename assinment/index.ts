// 1. Hello Variable
// Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting;
greeting = "Hello, world";
console.log(greeting);


// 2. Basic Math
// Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1 = 5;
let num2 = 4;
let sum = num1 + num2;
let diff = num1 - num2;
let  prod = num1 * num2;
let quot = num1 / num2;
console.log(sum);
console.log(diff);
console.log(prod);
console.log(quot);
console.log(`Sum: ${sum}`);
console.log(`Difference: ${diff}`);
console.log(`product: ${prod}`);
console.log(`quotient: ${quot}`);



// 3. Swapping Values
// Swap the values of two variables without using a third variable.
let a = 10;
let b = 5;
a = a + b; //  10+5 = 15
b = a - b; // 15-5 = 10
a = a - b; // 15-10 = 5
console.log(`After swapping: a = ${a}, b = ${b}`);



// 4. Type Annotation (TypeScript)
// This applies to TypeScript. Create a string variable and try changing its type.
let myString : string = "Amna";
// myString = 16; //when we try to change its type it generates an error.
console.log(myString);


// 5. Modulus Operator
// Use the modulus operator to find the remainder of two numbers.
let c = 19;
let d = 4;
let remainder = c % d;
console.log(remainder);



//6. Increment Challenge
//  Increment a variable's value by 1 using two different methods.

// first method
let e = 5;
e++;
console.log(e); 

// second method
let f = 7;
f += 1; // f = f+1
console.log(f);


//7. Logical Gates
//  Given three boolean variables, write expressions for AND, OR, and NOT gates.
let abc : boolean = true;
let def : boolean = false;
let ghi : boolean = true;
let and = abc && def && ghi; // false
let or =  abc || def || ghi; // true 
let not = !(abc) // false  
console.log(and);
console.log(or);
console.log(not);


// 8. Compound Assignment
//  Show examples of using compound assignment operators.
a = 10;
// plus equals to +=
a += 5; // a = a+5 = 10+5 = 15
console.log(a);

// subtract equals to -=
a -= 5; // a = a-5 = 15-5 = 10
console.log(a);

// multiply equals to *=
a *= 5; // a = a*5 = 10*5 = 50
console.log(a);

// divide equals to /=
a /= 5; // a = a/5 = 50/5 = 10
console.log(a);

// modulus equals to %=
a %= 5; // a = a%5 = 0
console.log(a); 


// 9. Even or Odd
// Write a program to check if a number is even or odd.
let num = 5;
if(num % 2 === 0){
    console.log("even number");
}else{
    console.log("odd number");
}



// 10. Voting Eligibility
//  Check if a person is eligible to vote.
let age: number = 18;
if(age >= 18){
    console.log( "You are eligible to vote.");
}else{
    console.log("sorry, you must be at least 18 years old to vote.");
}


// 11. Grading System
//  Assign a grade based on a numerical score.
let score = 77;
if(score >= 90){
    console.log('Grade: A');
}else if(score >= 80){
    console.log('Grade: B');
}else if(score >= 70){
    console.log('Grade: C');
}else if(score >= 60){
    console.log('Grade: D');
}else if(score >= 30){
    console.log('Grade: E')
}else{
    console.log('Failed');
}


// 12. Max of Three
//  Find the maximum of three numbers.

// first method
let y = findMax(1,2,7);
console.log("The maximum number is", y);

// second method
let x = findMax(1,2,7);
if(findMax(1,2,7)){
    Math.max(x)
}
console.log("The maximum number is", x);

// third method
let maxNumber = findMax(15,25,30);
function findMax(num1: number, num2: number, num3: number): number {
    return Math.max(num1, num2, num3);
}
console.log(`The maximum number is ${maxNumber}`);



// 14. Fahrenheit to Celsius Converter
//  Write a program that converts temperature from Fahrenheit to Celsius.
const fahrenheitTemperature = 68;
function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * ( 5 / 9 );
}const celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
console.log(`Temperature in Celsius: ${celsiusTemperature.toFixed(2)}°C`);  // wrong 


//15. Positive, Negative, or Zero
// Check if a number is positive, negative, or zero.

let numb = -2;
// let numb = 3;
// let numb = 0;
if(numb > 0){
    console.log(`The number ${numb} is positive.`)
}else if(numb < 0){
    console.log(`The number ${numb} is negative.`)
}else if(numb == 0){
    console.log(`The number is zero`)
}


// 16. Multiplication Tabl
//  Write a program that prints the multiplication table of a given number up to 10.
function printMulTable(number: number) {
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}
printMulTable(7);
