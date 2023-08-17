function solution(t, p) {
    let arr = [];
    const length = p.length;
    t = t.split('');
    
    t.forEach((e, idx) => {
        !t[idx + length - 1] ? -1 : arr.push(Number(t.slice(idx, idx + length).join('')));
    })
    
    arr = arr.filter((e) => e <= Number(p));
    
    return arr.length;
}