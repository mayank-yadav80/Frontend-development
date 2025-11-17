let expenses = [5000, 1200, 8000, 1500, 1000]; // food, travel, rent, bills, leisure
let total = expenses.reduce((sum, val) => sum + val, 0);
let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total + tax;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final after 10% tax:", finalAmount.toFixed(2));