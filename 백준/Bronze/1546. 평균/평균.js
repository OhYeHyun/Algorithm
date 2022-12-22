const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[1].split(" ").map((item) => +item);
solution(input);

function solution(arr) {
  arr.sort((a, b) => a - b);
  const result =
    arr
      .map((item) => (item / Math.max(...arr)) * 100)
      .reduce((sum, item) => (sum += item), 0) / arr.length;
  console.log(result);
}