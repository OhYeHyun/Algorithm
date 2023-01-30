const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

input.shift();

for (let i = 0; i < input.length; i++) {
  let [num, str] = input[i].split(" ");
  solution(num, str);
}

function solution(n, s) {
  for (let i = 0; i < s.length; i++) {
    process.stdout.write(s[i].repeat(n));
  }
  console.log();
}
