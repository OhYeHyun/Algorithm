const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let first = input.shift().split(" ").map(Number);
solution(input);

function solution(arr) {
  let newArr = new Array(first[0]).fill(1).map((a, b) => a + b);
  for (let i = 0; i < first[1]; i++) {
    arr[i] = arr[i].split(" ").map(Number);
    let tmp = newArr.splice(arr[i][0] - 1, arr[i][1] - arr[i][0] + 1);
    tmp.reverse();
    newArr.splice(arr[i][0] - 1, 0, tmp);
    newArr = newArr.flat();
  }
  console.log(newArr.join(" "));
}