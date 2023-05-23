const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution(input[0]);

function solution(a) {
  for (let i = 1; i <= a * 2 - 1; i++) {
    if (i <= a) {
      console.log(" ".repeat(Math.abs(a - i)) + "*".repeat(i * 2 - 1));
    } else {
      console.log(" ".repeat(Math.abs(a - i)) + "*".repeat(4 * a - 2 * i - 1));
    }
  }
}