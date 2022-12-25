const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(a) {
  console.log(
    a[1]
      .split("")
      .map(Number)
      .reduce((a, b) => a + b)
  );
}