const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

input.shift();
solution(input);

function solution(arr) {
  let set = new Set();
  let answer = 0;
  let count = 1;
  arr.forEach((a) => {
    for (let i = 1; i < a.length; i++) {
      a[i] !== a[i - 1] ? count++ : 1;
    }

    a.split("").forEach((e) => {
      set.add(e);
    });
    set.size == count ? answer++ : 1;
    count = 1;
    set.clear();
  });
  console.log(answer);
}