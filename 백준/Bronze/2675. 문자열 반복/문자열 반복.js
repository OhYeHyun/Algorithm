const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .slice(1);

for (let i = 0; i < input.length; i++) {
  let [num, str] = input[i].split(" ");
  solution(num, str);
}

function solution(n, s) {
  console.log(
    s
      .split("")
      .map((e) => e.repeat(n))
      .join("")
  );
}