const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution(input[0]);

function solution(arr) {
  arr == arr.split("").reverse().join("") ? console.log(1) : console.log(0);
}