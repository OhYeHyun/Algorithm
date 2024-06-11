const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line.trim().split(" ").map((e) => +e));
  if (input.length === Number(input[0][1]) + 2) {
    rl.close();
  }
});

rl.on('close', () => {
	const [houseN, rainM] = input.shift();
	let answer = input.shift();
	let rain = new Array(houseN).fill(0);
	
	for (let i = 0; i < input.length; i++) {
		let [first, last] = input[i];
		for (let j = first - 1; j <= last - 1; j++) {
			rain[j]++;
		}
		if ((i + 1) % 3 === 0) {
			rain = rain.map((e) => e && e - 1);
			answer = answer.map((e, idx) => e + rain[idx]);
			rain.fill(0);
		}
	}
	answer = answer.map((e, idx) => e + rain[idx]);
	console.log(answer.join(" "));
});
