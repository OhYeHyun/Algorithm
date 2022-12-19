const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(a) {
  for (let i = 1; i <= a; i++) {
    console.log(" ".repeat(a - i) + "*".repeat(i));
  }
}
