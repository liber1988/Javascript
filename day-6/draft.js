function reverseString(str, reversestr) {
  if (str.length >= 1) {
    reversestr += str.slice(-1);
    return reverseString(str.slice(0, -1), reversestr);
  } else {
    return reversestr;
  }
}

console.log(reverseString("hello", ""));
