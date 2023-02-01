const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/ |\n/);

solution(input[0].split(""), input[1].split(""));

function solution(num1, num2) {
  const newNum1 = [];
  const newNum2 = [];
  num1.forEach(() => newNum1.push(num1.pop()));
  newNum1.push(num1.pop());
  num2.forEach(() => newNum2.push(num2.pop()));
  newNum2.push(num2.pop());

  console.log(
    newNum1.join("") > newNum2.join("") ? newNum1.join("") : newNum2.join("")
  );
}