const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

solution(input);

function solution(a) {
  const arr = [1, 1, 2, 2, 2, 8];
  const newArr = [];
  for (let i = 0; i < a.length; i++) {
    newArr.push(arr[i] - a[i]);
  }
  console.log(newArr.join(" "));
}