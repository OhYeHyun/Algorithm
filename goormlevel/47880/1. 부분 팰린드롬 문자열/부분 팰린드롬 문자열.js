const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = '';
rl.on("line", function(line) {
	input = line.trim();
	if (!!input) rl.close();
}).on("close", function() {
	solution(input)
});

function solution(input) {
	let answer = 1;
	for (let i = 0; i < input.length - 1; i++) {
		for (let j = i + 1; j < input.length; j++) {
			const cur = input.slice(i, j + 1);
			answer = Math.max(answer, pel(cur));
		}
	}
	console.log(answer)
}

function pel(str) {
	let stack = [];
	
	if (str.length % 2 === 0) {
		for (let i = 0; i < str.length; i++) {
			if (i <= (str.length / 2) - 1) {
				stack.push(str[i]);
			} else if (str[i] === stack.pop()) {
				continue;
			} else {
				return 0;
			}
		}
	} else {
		for (let i = 0; i < str.length; i++) {
			if (i <= ((str.length - 1) / 2) - 1) {
				stack.push(str[i]);
			} else if (i >= ((str.length + 1) / 2) && str[i] === stack.pop()) {
				continue;
			} else if (i === ((str.length + 1) / 2) - 1) {
				continue;
			} else {
				return 0;
			}
		}
	}
	return str.length;
}

// 홀수만 받기, 1이면 pass,
// 문자열 길이 + 1 / 2의 인덱스 제외하고, stack으로 넣어서 확인.
// 맞으면 answer = Math.max(answer, count);
												
												
												
												
												
												
												
												
												