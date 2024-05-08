function ex1(n) {
  if (n <= 1) {
    return 1;
  }
  return n + ex1(n - 1);
}

function ex2(str) {
  if (str.length <= 1) {
    return str;
  }

  return str.slice(-1) + ex2(str.slice(0, -1));
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
