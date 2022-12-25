const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(a) {
  let sum = 0;
  for (let i = 0; i < a[0]; i++) {
    sum += +a[1][i];
  }
  console.log(sum);
}