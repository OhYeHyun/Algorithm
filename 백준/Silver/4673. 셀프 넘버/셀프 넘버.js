solution();

function solution() {
  const set = new Set();
  for (let i = 1; i <= 10000; i++) {
    let sum = 0;
    sum += i;
    i = i.toString();
    for (let j = 0; j < i.length; j++) {
      sum += +i[j];
    }
    sum <= 10000 ? set.add(sum) : 0;
  }
  for (let i = 1; i <= 10000; i++) {
    if (!set.has(i)) {
      console.log(i);
    }
  }
}