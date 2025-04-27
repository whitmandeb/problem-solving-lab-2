// 1. Grade Checker

let score = 82;
// Print A, B, C, D, or F based on score

if (score > 90) {
  console.log("Grade A");
} else if (score > 80) {
  console.log("Grade B");
} else if (score > 70) {
  console.log("Grade C");
} else if (score > 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}
console.log(score);

// 2. Pizza Quantity Warning

let quantity = 12;
// Print warning if quantity > 10
if (quantity > 10) {
  console.log("Warning!");
}

// 3. Login Simulator

let password = "letmein"; // or use prompt
// Print "Access granted" or "Access denied"

if (password === "please") {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}
