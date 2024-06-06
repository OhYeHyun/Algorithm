const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const dir = new Map([
  ["ADD", "0000"],
  ["SUB", "0001"],
  ["MOV", "0010"],
  ["AND", "0011"],
  ["OR", "0100"],
  ["NOT", "0101"],
  ["MULT", "0110"],
  ["LSFTL", "0111"],
  ["LSFTR", "1000"],
  ["ASFTR", "1001"],
  ["RL", "1010"],
  ["RR", "1011"],
]);

input.shift();

input.forEach((e) => {
  let arr = e.split(" ");
  solution(arr);
});

function solution(a) {
  let one = a[0];
  let two = +a[1];
  let three = +a[2];
  let four = +a[3];
  let haveC = false;
  let answer = "";

  if (one.at(-1) == "C") {
    haveC = true;
    one = one.slice(0, one.length - 1);
  }

  answer = dir.get(one);
  answer += haveC ? "10" : "00";

  answer += two.toString(2).padStart(3, "0");
  answer += three.toString(2).padStart(3, "0");

  if (answer[4] == "0") {
    answer += four.toString(2).padStart(3, "0") + "0";
  } else {
    answer += four.toString(2).padStart(4, "0");
  }

  console.log(answer);
}