let marks = [88, 92, 79, 85, 90];
let total = marks.reduce((sum, val) => sum + val, 0);
let average = total / marks.length;
let percentage = (total / 500) * 100;

let detained = marks.some(mark => mark < 35);

if (detained) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50) {
  console.log("Promoted");
} else {
  console.log("Detained");
}