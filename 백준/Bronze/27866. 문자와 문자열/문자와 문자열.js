const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution(input[0]);

function solution(str) {
  console.log(str[input[1] - 1]);
}