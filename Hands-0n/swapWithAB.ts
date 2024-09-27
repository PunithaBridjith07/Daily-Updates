/* Declare two variables x and y with numerical values.Swap their values without using a third variable */

let x: number = 1;
let y: number = 15;

x = x + y;
y = x - y;
x = x - y;
console.log(x, y);