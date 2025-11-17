let bonus = 5000; // global

function calculateSalary(isPermanent) {
  let salary = 40000;
  if (isPermanent) {
    salary += bonus;
  }
  console.log(`Total Salary: ₹${salary}`);
}

calculateSalary(true);  // Output: ₹45000
calculateSalary(false); // Output: ₹40000