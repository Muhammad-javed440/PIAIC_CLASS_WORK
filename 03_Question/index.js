"use strict";
//   Print a random number between 1 and 100
let max = 100;
let min = 1;
let randomNumber = Math.floor(Math.random() * (max - min) + min);
console.log("Random Number Between " + min + " And " + max + " Is :" + randomNumber);
