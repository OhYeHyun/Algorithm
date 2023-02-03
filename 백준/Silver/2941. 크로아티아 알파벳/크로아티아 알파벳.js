const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution(input.toString());

function solution(arr) {
  const strs = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
  console.log(arr.replace(strs, "1").length);
}