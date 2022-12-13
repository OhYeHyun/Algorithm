const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0], input[1]);

function solution(a, b) {
  const first = +b.charAt(2);
  const second = +b.charAt(1);
  const last = +b.charAt(0);

  console.log(a * first);
  console.log(a * second);
  console.log(a * last);
  console.log(a * +b);
}