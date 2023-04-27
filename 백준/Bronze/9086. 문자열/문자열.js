const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const first = input.shift();
solution(input);

function solution(str) {
  for (let i = 0; i < first; i++) {
    console.log(str[i][0] + str[i][str[i].length - 1]);
  }
}