function solution(cacheSize, cities) {
    let answer = 0;
    let arr = [];
    
    cities.forEach((e) => {
        e = e.toLowerCase()
        arr.includes(e) ? (arr.splice(arr.indexOf(e), 1), arr.push(e), answer += 1) 
        : (arr.push(e), answer += 5)
        arr.length > cacheSize ? arr.shift() : -1;
    })
    
    return answer;
}