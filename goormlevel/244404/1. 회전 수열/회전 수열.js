const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line.trim().split(" ").map((e) => +e));
  if (input.length === 2) {
    rl.close();
  }
}).on('close', () => {
	solution(input);
});

function solution(input) {
	let [len, m] = input.shift();
	let arr = input.shift();
	let answer = (m % len === 0 ? 0 : len - (m % len));
	let first = 0;

	while (m > 0) {
		let idx = (first + arr[first]) % len;
		first = idx;
		m--;
	}
	console.log(arr[first])
}
// 0부터 len - 1 까지.
// 0 5 4개 > 5 - 4 + 1 > 2
// 0 0 1개 > 1 - 1 + 1 > 5
// m % len
// 0 1 2 3 4 41개 > 41 % 5 = 1
// 1 7 13  
