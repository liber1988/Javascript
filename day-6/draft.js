let variable = true;
check3 = 6;
let check5 = 10;
function theory() {
  check3 = 7;
  var check4 = 8;
  console.log(check5);
}
if (variable) {
  var check = 1;
  if (variable) {
    var check2 = 2;
  }
}
theory();
