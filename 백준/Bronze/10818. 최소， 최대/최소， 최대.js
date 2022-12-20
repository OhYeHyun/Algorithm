const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input[1].split(" ").map((item) => +item));

function solution(arr) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr[0], arr[arr.length - 1]);
}
