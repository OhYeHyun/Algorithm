const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let time = input[0];
let dur = input[1];
time = time.split(" ").map((item) => +item);
dur = dur.split(" ").map((item) => +item);

solution(time[0], time[1], dur[0]);

function solution(a, b, c) {
  if (b + c >= 60) {
    a += Math.floor((b + c) / 60);
    b = (b + c) % 60;
    if (a >= 24) {
      a -= 24;
    }
  } else {
    b += c;
  }
  console.log(a + " " + b);
}