/* Create a function that takes in an array of numbers and returns the sum of all the even numbers in the array. */



let sum: number = 0;

let getInput = require('prompt-sync')();
let sentence: string = getInput("Enter the Input : ");
let splitedValues: string[] = sentence.split(" ");
sum = splitedValues.reduce((add: number,i: string) => Number(i) % 2 === 0 ? add + Number(i) : add,0);

console.log(`Sum of Evens : ${sum}`);