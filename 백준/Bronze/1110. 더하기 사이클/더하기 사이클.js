const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input[0]);

function solution(a) {
  let n = 0;
  const aa = a;
  let result = true;
  while (result) {
    if (+a < 10) {
      a = "0" + a;
    }
    let sum = String(+a[a.length - 2] + +a[a.length - 1]);
    if (+sum >= 10) {
      sum = sum[sum.length - 1];
    }
    let last = a[a.length - 1];
    num = last + sum;
    if (+num === +aa) {
      result = false;
    }
    n++;
    a = num;
  }
  console.log(n);
}