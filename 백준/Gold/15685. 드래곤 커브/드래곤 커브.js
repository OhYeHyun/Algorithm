const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./b15685/input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let arr = [];
input.forEach((e) => {
  arr.push(e.split(" ").map((e) => +e));
});

solution(arr);

function solution(a) {
  let answer = 0;
  const len = a.shift()[0];
  // prettier-ignore
  const xyDir = [[1, 0], [0, -1], [-1, 0], [0, 1]];
  // prettier-ignore
  const squreDir = [[1, 0], [0, 1], [1, 1]];
  let xy = [];

  for (let i = 0; i < len; i++) {
    let curve = [];
    let arr = a[i];
    let [[x, y], xyDirIdx, gen] = [[arr[0], arr[1]], arr[2], arr[3]];

    let curAddDir = [x, y].map((e, idx) => (e += xyDir[xyDirIdx][idx]));
    let curStack = [[x, y], curAddDir];
    curve.push(...curStack);

    let curGen = 0;

    while (curGen < gen) {
      let standardXY = curStack.pop();

      while (curStack.length) {
        let targetXY = curStack.pop();
        //prettier-ignore
        let changeAmountXY = [standardXY[1] - targetXY[1], -standardXY[0] + targetXY[0]];

        targetXY = standardXY.map((e, idx) => e + changeAmountXY[idx]);
        curve.push(targetXY);
      }
      curGen++;
      curStack = [...curve];
    }
    xy.push(...curve);
  }

  xy = [...new Set(xy.join("|").split("|"))]
    .map((e) => e.split(","))
    .map((e) => e.map((ee) => +ee));

  xy.forEach((e) => {
    let [x, y] = e;
    let count = 1;
    for (arr of squreDir) {
      let newXY = [x + arr[0], y + arr[1]];
      let include = xy
        .filter((e) => e[0] === newXY[0] && e[1] === newXY[1])
        .flat();
      if (!!include.length) count++;
    }
    if (count === 4) answer++;
  });
  console.log(answer);
}