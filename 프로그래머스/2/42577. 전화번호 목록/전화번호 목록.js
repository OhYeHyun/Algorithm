function solution(phone_book) {
    let answer = true;
    let hash = new Map();
    
    phone_book.forEach((e) => {
        hash.set(e, "");
    })

    for (let [key, value] of hash) {
        for (let i = 1; i < key.length; i++) {
            if (hash.has(key.slice(0, i))) return false;
        }
    }
    
    return answer;
}