function ex1(n) {
  if (n <= 1) {
    return 1;
  }
  return n + ex1(n - 1);
}

function ex2(str, reversestr) {
  if (str.length >= 1) {
    reversestr += str.slice(-1);
    return reverseString(str.slice(0, -1), reversestr);
  } else {
    return reversestr;
  }
}

function ex3(n) {
  console.log(n);
  if (n <= 1) {
    return 1;
  }
  return ex3(n - 1);
}

function ex4(arr, n) {
  if (arr.length === n) {
    return;
  }
  console.log(arr[n]);

  return ex4(arr, n + 1);
}
