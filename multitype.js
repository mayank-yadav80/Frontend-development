let dataSummary = {
  name: "Mayank",
  age: 22,
  isStudent: true,
  hobbies: ["coding", "design"],
  profile: { city: "Chhata", country: "India" },
  score: null,
  status: undefined
};

let report = {};

for (let key in dataSummary) {
  let value = dataSummary[key];
  let type = Array.isArray(value) ? "array" : typeof value;
  report[key] = { value, type };
}

console.table(report);