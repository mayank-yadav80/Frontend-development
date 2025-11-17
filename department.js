const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

for (let [dept, score] of departments) {
  let status;
  if (score >= 90) status = "Excellent";
  else if (score >= 75) status = "Good";
  else if (score >= 60) status = "Average";
  else status = "Needs Improvement";

  console.log(`${dept}: ${status}`);
}