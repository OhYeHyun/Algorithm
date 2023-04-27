const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(a) {
  a.forEach((e) => {
    console.log(e);
  });
}