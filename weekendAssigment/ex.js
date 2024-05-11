// ex-1.1
function yesOrNo(value) {
  if (value) {
    console.log("yes");
  } else {
    console.log("No");
  }
}
// ex 2.1
function sumTwoNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}
// ex 2.2
function binary(array) {
  let sum = 0;
  let j = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    sum = sum + Math.pow(2, j) * array[i];
    j++;
  }
  return sum;
}
// ex 2.3
function findNextSquare(number) {
  let n = Math.sqrt(number);
  if (n % 1 === 0) {
    console.log(n);
    return (n + 1) * (n + 1);
  } else {
    return -1;
  }
}

//ex-2.4
function findUniq(array) {
  if (array[0] != array[1]) {
    if (array[0] == array[2]) {
      return array[1];
    } else {
      return array[0];
    }
  }
  for (let i = 1; i < array.length; i++) {
    if (array[i] != array[i + 1]) {
      return array[i + 1];
    }
  }
}
// ex-2.5
function summation(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// ex-2.6
function centureFromYear(year) {
  return Math.round(year / 100);
}
// ex-2.7
function basic(operation, value1, value2) {
  let result;
  switch (operation) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
  }
  return result;
}

//ex-3.1
function nb_year(p, precentage, p0, aug) {
  let result = p0;
  let i = 0;
  while (result < p) {
    result = result + result * (precentage / 100) + aug;
    i++;
  }
  return i;
}
// ex3.2

function Bus(busStopsPeople) {
  let totalPeople = 0;
  let average = 0;

  for (let i = 0; i < busStopsPeople.length; i++) {
    average = busStopsPeople[i][0] - busStopsPeople[i][1];
    totalPeople += average;
    average = 0;
  }

  return totalPeople >= 0 ? totalPeople : 0;
}

// ex 3.3 fibonacci two elements
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
function fibonacci_tree(num) {
  for (let i = 0; i < num; i++) {
    console.log(fibonacci(i));
  }
}

// ex3.4 fibonacci three elements
function fibonacci3(num) {
  if (num < 3) {
    return num;
  } else {
    return fibonacci3(num - 1) + fibonacci3(num - 2) + fibonacci3(num - 3);
  }
}
function fibonacci_tree3(num) {
  for (let i = 0; i < num; i++) {
    console.log(fibonacci3(i));
  }
}

// ex 5.1 function trimming first and last character
function trimm(str) {
  let arr = str.split("");
  arr.shift();
  arr.pop();
  return arr.join("");
}
// ex 5.2
function repeatStr(num, str) {
  let arr = "";
  for (i = 0; i < num; i++) {
    arr += str;
  }
  return arr;
}
// ex 5.3
function toCamelCase(str) {
  let newStr = "";
  if (str.includes("-")) {
    var arr = str.split("-");
  } else {
    var arr = str.split("_");
  }
  for (i = 0; i < arr.length; i++) {
    newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return newStr;
}

//ex 5.4
function toWeirdCase(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  return arr.join("");
}
// ex 5.5
function abbreviate(str) {
  let arr = str.split(" ");
  let arr2 = "";
  for (let i = 0; i < arr.length; i++) {
    arr2 += arr[i].charAt(0).toUpperCase() + ".";
  }
  arr2 = arr2.slice(0, -1);
  return arr2;
}
// ex 5.6
function maskify(str) {
  if (str.length <= 4) {
    return str;
  }
  return "#".repeat(str.length - 4) + str.slice(-4);
}
// ex5.7
function shortestWordLength(str) {
  let words = str.split(" ");
  let shortestLength = Infinity;
  for (let word of words) {
    shortestLength = Math.min(shortestLength, word.length);
  }
  return shortestLength;
}
// ex5.7
function longestWordLength(str) {
  let words = str.split(" ");
  let longestLength = 0;
  for (let word of words) {
    longestLength = Math.max(longestLength, word.length);
  }
  return longestLength;
}
// ex-6.1
function accum(str) {
  let j = 1;
  let arr = "";
  for (let i of str) {
    arr += i.repeat(j);
    j++;
  }
  return arr;
}
//ex-6.2

function countDuplicates(str) {
  str = str.toLowerCase();
  let charCount = {};
  for (let char of str) {

  }

  return duplicatesCount;
}
console.log(countDuplicates("aabBcde"));
