const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(
  input[1].split(" ").map((item) => +item),
  +input[2]
);

function solution(arr, num) {
  let count = arr.filter((item) => item === num).length;
  console.log(count);
}
