const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  let tmp = input[i].split(" ");
  answer += +tmp[0] + +tmp[1] + "\n";
}

solution(answer);

function solution(a) {
  console.log(a);
}