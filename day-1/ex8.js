let num1 = 8;
let num2 = 15;
console.log(num1 + num2);

let a = 30;
let b = 12;
console.log(b - a);

let x = 7;
let y = 3;
console.log(x * y);

let dividend = 20;
let diviser = 4;
console.log(dividend % diviser);
console.log(dividend / diviser);

console.log(`remainder ${x % y}`);

let inputVariable = 4;
if (inputVariable % 2 == 0) {
  console.log(`Even`);
} else {
  console.log(`Odd`);
}

let inputVariable2 = 35;
if (inputVariable2 % 5 == 0 && inputVariable2 % 7 == 0) {
  console.log(`YES`);
} else {
  console.log(`NO`);
}

let i = 1;
do {
  if (i % 4 == 0) {
    console.log(i);
  }
  i++;
} while (i < 21);

let j = 15;
if (j < 20 && j > 10) {
  console.log(`yes it less than 20 and more than 10`);
}

let r = -15;
if (r < -5 || r > 10) {
  console.log(`yes it less than 10 and more than -5`);
}

let xy = true;
let result1 = !xy;

let numVariable = 13;
if (
  (numVariable > 5 && numVariable < 10) ||
  (numVariable > 20 && numVariable < 30)
) {
  console.log(`yes it is`);
}
