const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(arr) {
  let sum = 0;
  let point = 0;
  arr.forEach((e) => {
    e = e.split(" ");
    e.shift();
    if (e[1] == "A+") {
      sum += Number(e[0]) * 4.5;
      point += Number(e[0]);
    }
    if (e[1] == "A0") {
      sum += Number(e[0]) * 4.0;
      point += Number(e[0]);
    }
    if (e[1] == "B+") {
      sum += Number(e[0]) * 3.5;
      point += Number(e[0]);
    }
    if (e[1] == "B0") {
      sum += Number(e[0]) * 3.0;
      point += Number(e[0]);
    }
    if (e[1] == "C+") {
      sum += Number(e[0]) * 2.5;
      point += Number(e[0]);
    }
    if (e[1] == "C0") {
      sum += Number(e[0]) * 2.0;
      point += Number(e[0]);
    }
    if (e[1] == "D+") {
      sum += Number(e[0]) * 1.5;
      point += Number(e[0]);
    }
    if (e[1] == "D0") {
      sum += Number(e[0]) * 1.0;
      point += Number(e[0]);
    }
    if (e[1] == "F") {
      sum += Number(e[0]) * 0;
      point += Number(e[0]);
    }
    if (e[1] == "P");
  });
  console.log(sum / point);
}