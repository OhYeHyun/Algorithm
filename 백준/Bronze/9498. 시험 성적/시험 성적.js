const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = +input[0];

solution(input);

function solution(a) {
  switch (Math.floor(a / 10)) {
    case 10:
      console.log("A");
      break;
    case 9:
      console.log("A");
      break;
    case 8:
      console.log("B");
      break;
    case 7:
      console.log("C");
      break;
    case 6:
      console.log("D");
      break;
    default:
      console.log("F");
      break;
  }
}