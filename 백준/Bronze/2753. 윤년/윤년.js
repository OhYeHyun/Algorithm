const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

solution(input);

function solution(a) {
  if (a % 4 === 0) {
    if (a % 100 === 0) {
      if (a % 400 === 0) {
        console.log("1");
      } else {
        console.log("0");
      }
    } else {
      console.log("1");
    }
  } else {
    console.log("0");
  }
}