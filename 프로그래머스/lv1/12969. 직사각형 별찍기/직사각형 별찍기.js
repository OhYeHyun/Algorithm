process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = +n[0], b = +n[1];
    
    for (let i = 1; i <= b; i++) {
        console.log("*".repeat(a))
    }
    
});