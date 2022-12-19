const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let sum = "";

for (let i = 0; i < input.length; i++) {
  sum = input[i].split(" ").map((item) => +item);
  if (+sum[0] !== 0 && +sum[1] !== 0) {
    console.log(+sum[0] + +sum[1]);
  } else {
    return;
  }
}