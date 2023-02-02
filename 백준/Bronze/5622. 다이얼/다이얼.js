const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(/|\n/);

solution(input);

function solution(arr) {
  const strs = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
  let sum = 0;
  arr.forEach((e) => {
    sum +=
      strs.indexOf(strs.filter((str) => str.indexOf(e) !== -1).toString()) + 3;
  });
  console.log(sum);
}