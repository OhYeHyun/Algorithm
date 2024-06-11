const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
  if (input.length === Number(input[0]) + 1) {
    rl.close();
  }
});
rl.on('close', () => {
	let answer = 0;
		for (let i = 1; i < input.length; i++) {
			let curInput = input[i].split(" ");
			calculate(+curInput[0], curInput[1], +curInput[2]);
		}
	function calculate(a, sign, b) {
		switch (sign) {
			case "+":
				answer += a + b;
				break;
			case "-":
				answer += a - b;
				break;
			case "*":
				answer += a * b;
				break;
			case "/":
				answer += Math.floor(a / b);
				break;
		}
	}
	console.log(answer);
})