const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line.trim().split(" ").map((e) => +e));
  if (input.length === Number(input[0]) + 1) {
    rl.close();
  }
});
rl.on('close', () => {
	const len = input.shift();
	const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
	let answer = 0;
	let exist = 1;
	
	while (exist) {
		exist = 0;
		let change = [];
		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len; j++) {
				let cur = input[i][j];
				if (cur) {
					exist++;
					let cnt = 0;
					for (let [dirY, dirX] of dir)  {
						let newY = i + dirY
						let newX = j + dirX;
						
						if (newY >= 0 && newY < len && newX >= 0 && newX < len && !input[newY][newX]) cnt++;
					}
					cnt = (cur > cnt ? cur - cnt : 0);
					change.push([i, j, cnt]);
				}
			}
		}	
		for (let [i, j, cnt] of change) {
			input[i][j] = cnt;
		}
		answer++;
	}
	console.log(answer - 1)
});