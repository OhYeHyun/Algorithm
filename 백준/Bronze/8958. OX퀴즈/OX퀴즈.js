const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.splice(0, 1);

solution(input);

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (input[i][j] === "O") {
        count++;
      } else {
        count = 0;
      }
      sum += count;
    }
    console.log(sum);
  }
}