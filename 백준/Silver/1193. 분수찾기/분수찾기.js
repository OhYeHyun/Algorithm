const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution(input++);

function solution(a) {
  let sum = 1;
  let count;
  for (count = 1; sum <= a - 4 * count; count++) {
    sum += 4 * count;
  }
  if (a < sum + count) {
    console.log(String(count - a + sum) + "/" + String(count + a - sum));
  } else if (sum + count <= a && a < sum + 3 * count) {
    sum += count;
    console.log(String(a - sum + 1) + "/" + String(2 * count - a + sum));
  } else if (sum + 3 * count <= a) {
    sum += 3 * count;
    console.log(String(2 * count + 1 - a + sum) + "/" + String(a - sum + 1));
  }
}