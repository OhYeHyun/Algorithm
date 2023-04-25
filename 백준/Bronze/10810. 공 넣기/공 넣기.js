const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let first = input.shift().split(" ").map(Number);
solution(input);

function solution(arr) {
  let newArr = new Array(first[0]).fill(0);
  for (let i = 0; i < first[1]; i++) {
    arr[i] = arr[i].split(" ").map(Number);
    newArr.fill(arr[i][2], arr[i][0] - 1, arr[i][1]);
  }
  console.log(newArr.join(" "));
}