const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0]);

function solution(a) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${a} * ${i} = ${a * i}`);
  }
}
