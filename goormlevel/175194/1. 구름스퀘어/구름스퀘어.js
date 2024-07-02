// Run by Node.js
const readline = require('readline');
let rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];
rl.on('line', (line) => {
	input.push(line.trim().split(" ").map(Number))
	if (input.length === input[0][0] + 1) {
		rl.close();
	}
}).on('close', () =>{
	solution(input)
})
function solution(input) {
	const len = input.shift()[0]
	let answer = 1;
	
	input.sort((a, b) => a[1] - b[1]);
	
	let open = input[0][1] + 1
	for (let i = 1; i < len; i++) {
		const [start, end] = input[i];
		if (open <= start) {
			open = end + 1;
			answer++;
		}
	}
	console.log(answer)
}