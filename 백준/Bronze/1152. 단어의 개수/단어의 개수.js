const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

solution(input);

function solution(arr) {
  console.log(arr.includes("") ? 0 : arr.length);
}