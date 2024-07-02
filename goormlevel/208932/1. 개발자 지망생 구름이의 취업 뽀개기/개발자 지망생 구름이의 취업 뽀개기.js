// Run by Node.js
const readline = require('readline');
let rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];
rl.on('line', (line) => {
	input.push(line.trim().split(" ").map(Number))
	if (input.length === input[0][0] + 2){
		rl.close();
	}
}).on('close', () =>{
	solution(input)
})
function solution(input) {
	let n = input.shift()[0];
	const solves = input.shift();
	input.sort((a, b) => a[0] - b[0] || a[1] - b[1])
	
	let curCnt = 0;
	let i = 0;
	let answer = -60;
	let preSec;
	
	for (let j = 0; j < n; j++) {
		const [level, sec] = input[j];
		const solveCnt = solves[i];
		
		if ((i + 1) === level) {
			curCnt === 0 ? answer += sec + 60 : answer += sec + Math.abs(preSec - sec)
			preSec = sec;
			curCnt++;
			if (curCnt === solveCnt) {
				i++;
				curCnt = 0;
			}
		}
	}
	console.log(answer)
}