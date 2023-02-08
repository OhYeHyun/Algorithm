const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution(input++);

function solution(a) {
  let count;
  let b = (a - 2) / 6;
  let sum = 0;
  if (a > 1) {
    for (count = 1; sum <= b - count; count++) {
      sum += count;
    }
    console.log(count + 1);
  } else {
    console.log(1);
  }
}