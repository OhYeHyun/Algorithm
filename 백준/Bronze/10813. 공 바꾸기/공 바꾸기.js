const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let first = input.shift().split(" ").map(Number);
solution(input);

function solution(arr) {
  let newArr = [];
  for (let i = 1; i <= first[0]; i++) {
    newArr.push(i);
  }
  for (let i = 0; i < first[1]; i++) {
    arr[i] = arr[i].split(" ").map(Number);
    let tmp = newArr[arr[i][0] - 1];
    newArr.splice(arr[i][0] - 1, 1, newArr[arr[i][1] - 1]);
    newArr.splice(arr[i][1] - 1, 1, tmp);
  }
  console.log(newArr.join(" "));
}