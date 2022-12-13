const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

solution();

function solution() {
  console.log(
    `|\\_/|
|q p|   /}
( 0 )"""\\
|"^"` +
      "`" +
      `    |
||_/=\\\\__|`
  );
}