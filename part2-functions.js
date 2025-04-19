function dogToHumanYears(dogAge) {
  console.log(dogAge * 7);
}

function calculateTip(total, percentage) {
    let tip = total * percentage;
    console.log("Calculated Tip:", tip);
    console.log("New Total:", total + tip);
}

function checkEvenOdd(num) {
    // % allows you to check the remainder of a division problem
  if (num%2 != 0) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
}

checkEvenOdd(2);
checkEvenOdd(5);
dogToHumanYears(2);
calculateTip(200, 0.20)