let runningSum = 0;
let sums = [];

const fs = require("fs");
const file = fs.readFileSync("input.txt", "utf8");

const lines = file.split("\n");

//console.log(lines);

lines.forEach((line) => {
  if (line === "\r") {
    sums.push(runningSum);
    runningSum = 0;
  } else {
    runningSum += parseInt(line, 10);
  }
});

sums.push(runningSum);

// answer 1
console.log(Math.max(...sums));

//answer 2
sums.sort((a, b) => b - a);
console.log(sums[0] + sums[1] + sums[2]);
