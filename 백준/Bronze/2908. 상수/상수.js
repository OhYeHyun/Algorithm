const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/ |\n/);

solution(input);

function solution(arr) {
  const [newNum1, newNum2] = arr.map((e) => [...e].reverse().join(""));
  console.log(Math.max(newNum1, newNum2));
}