// Question: Write a function getEvens that takes an array of numbers and returns a new array containing only the even numbers.
const arr = [1, 2, 3, 4, 5, 6];
console.log(getEvens(arr));

function getEvens(arr) {
  const arrEvens = [];
  arr.forEach((element) => {
    if (element % 2 === 0) {
      arrEvens.push(element);
    }
  });
  return arrEvens;
}

const numbers = [78, 54, -9, 8.7];

numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
