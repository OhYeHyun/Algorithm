const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((item) => +item);

solution(input);

function solution(a) {
  let sum = 0;
  a.map((item) => (sum += item));
  console.log(sum);
}