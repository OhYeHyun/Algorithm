const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

input = input[0].toUpperCase();
solution(input.split(""));

function solution(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] += 1;
    }
  }
  let result = "";
  let count = 0;

  for (char in obj) {
    if (obj[char] > count) {
      count = obj[char];
      result = char.toUpperCase();
    } else if (obj[char] === count) {
      result = "?";
    }
  }
  console.log(result);
}
