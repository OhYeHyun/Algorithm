const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution(input[0]);

function solution(a) {
  for (let i = 97; i <= 122; i++) {
    console.log(a.indexOf(String.fromCharCode([i])));
  }
}