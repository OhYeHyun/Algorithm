function solution(cacheSize, cities) {
    let answer = 0, arr = [];
    
    cities.forEach((e) => {
        e = e.toLowerCase()
        
        if (arr.includes(e)) {
            arr.splice(arr.indexOf(e), 1);
            answer += 1;
        } else {
            answer += 5
        }
        arr.push(e);
        
        arr.length > cacheSize ? arr.shift() : -1;
    })
    
    return answer;
}