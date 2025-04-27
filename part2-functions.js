//1. Dog Age Converter

function dogToHumanYears(dogAge) {
  let yearOne = 15;
  let yearTwo = 9;
  let yearsThereafter = 5;
  if (dogAge == 1) {
    return yearOne;
  } else if (dogAge == 2) {
    return yearOne + yearTwo;
  } else if (dogAge >= 3) {
    return yearOne + yearTwo + (dogAge - 2) * yearsThereafter;
  }
}

function calculateTip(total, percentage) {
  let tip = total * percentage;
  console.log("Calculated Tip:", tip);
  console.log("New Total:", total + tip);
}

function checkEvenOdd(num) {
  // % allows you to check the remainder of a division problem
  if (num % 2 != 0) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
}

checkEvenOdd(2);
checkEvenOdd(5);
console.log("my dogs age is " + dogToHumanYears(10));
calculateTip(200, 0.2);
