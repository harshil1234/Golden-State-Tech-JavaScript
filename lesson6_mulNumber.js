//Write a function that takes in a number (num) and returns the number multiplied by 3 if the number is grater than 5. Otherwise the function returns the string "enter a bigger number :)"
function mulNumber(anumber) {
  if (anumber > 5) {
    return anumber * 3;
  } else {
    console.log("enter a bigger number :)");
    return;
  }
}

mulNumber(9);
mulNumber(7);
mulNumber(1);
mulNumber(-1);
mulNumber(500);