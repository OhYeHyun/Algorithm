const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const first = input.shift();
solution(input);

function solution(str) {
  str.forEach((e) => {
    console.log(e[0] + e[e.length - 1]);
  });
}