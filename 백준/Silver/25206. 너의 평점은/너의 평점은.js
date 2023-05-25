const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(arr) {
  let sum = 0;
  let point = 0;
  const table = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
  };
  arr.forEach((e) => {
    e = e.split(" ");
    e.shift();
    if (e[1] == "P");
    else {
      sum += Number(e[0]) * table[e[1]];
      point += Number(e[0]);
    }
  });
  console.log(sum / point);
}