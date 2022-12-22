const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].split(" ").map((item) => +item);
    let num = arr[i].shift();
    let result = arr[i].reduce((sum, item) => (sum += item)) / num;
    console.log(
      ((arr[i].filter((item) => item > result).length / num) * 100).toFixed(3) +
        "%"
    );
  }
}