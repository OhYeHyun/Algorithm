const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, num] = input[0].split(" ").map((item) => +item);

console.log(
  input[1]
    .split(" ")
    .map((item) => +item)
    .filter((item) => item < num)
    .join(" ")
);
