const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const inputTotal = +input[0];
const inputN = +input[1];
let total = 0;

for (let i = 2; i <= inputN + 1; i++) {
  let arr = input[i].split(" ").map((item) => +item);
  total += arr[0] * arr[1];
}

solution(inputTotal, total);

function solution(inputT, t) {
  console.log(inputT === t ? "Yes" : "No");
}