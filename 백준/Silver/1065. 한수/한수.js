const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution(+input);

function solution(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    i = i.toString();
    if (i.length >= 3) {
      const dif = new Set();
      for (let j = 0; j < i.length - 1; j++) {
        let first = +i[j];
        let second = +i[j + 1];
        dif.add(first - second);
      }
      if (dif.size === 1 && !dif.has(NaN)) {
        count++;
      }
    } else {
      count++;
    }
  }
  console.log(count);
}