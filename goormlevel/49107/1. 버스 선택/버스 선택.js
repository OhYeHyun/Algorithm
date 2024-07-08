const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on("line", function(line) {
	input.push(line.trim().split(" ").map(Number));
	if (input.length === input[0][0] + 1) {
		rl.close();
	}
}).on("close", function() {
	solution(input)
});

function solution(input) {
	const [n, start] = input.shift();
	const diff = new Array(n).fill(null);
	
	for (let i = 0; i < n; i++) {
		let [busS, busE] = input[i];
		if (start > busS) {
			while (start > busS) {
				busS += busE
			}
		}
		if (start === busS) {
			diff[i] = 0;
		} else if (start < busS) {
			diff[i] = busS - start;
		}
	}
	
	const min = [...diff].sort((a, b) => a - b)[0];
	console.log(diff.indexOf(min) + 1)
}





