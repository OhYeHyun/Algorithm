const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0], input[1]);

function solution(a, b) {
  if (b < 45) {
    if (a !== 0) {
      a -= 1;
      b += 15;
    } else {
      a = 23;
      b += 15;
    }
  } else {
    b -= 45;
  }
  console.log(a + " " + b);
}