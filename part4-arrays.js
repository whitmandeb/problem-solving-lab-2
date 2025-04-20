// Problem 1 Favorite Foods

let favoriteFoods = ["cheez its", "pizza", "steak", "seafood", "fried chicken"];
console.log(favoriteFoods);
console.log(favoriteFoods[0]);
console.log(favoriteFoods[4]);
favoriteFoods.push("chips");
console.log(favoriteFoods);


// Part 2 Guest List

let guests = ["Warren Buffett", "John Maxwell", "Weird Al", "Marilyn Monroe", "Jim Henson"];
console.log(guests);
guests.shift();
console.log(guests);
guests.push("Robert Kiyosaki");
console.log(guests);
console.log(guests.length);


// Part 3 Weekend Tasks

let tasks = ["laundry", "groceries", "coding", "naps"];
function printTasks(){
    for (i = 0; i < tasks.length; i++){
        console.log(i + 1, `-`, tasks[i]);
    }
}
printTasks();


// Part 4 Reverse It (Manual Reverse)


let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
for (i = numbers.length; i > 1, i--;) {
    numbers.shift();
    numbers.push(i+1);
}
console.log(numbers);


// Bonus: Random Picker

let lunches = ["burrito", "pizza", "sandwich", "ramen"];
function randomLunch(){
   return lunches[Math.floor(Math.random() * 4)]
}
console.log(randomLunch(lunches)); 