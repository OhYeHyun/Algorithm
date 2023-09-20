process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = +n[0], b = +n[1];
    
    console.log(("*".repeat(a) + '\n').repeat(b));

});