function solution(s) {
    const tmp = []
    
    for (let i = 0; i < s.length; i++) {
        if (tmp[tmp.length - 1] == s[i]) {
            tmp.pop()
        } else {
            tmp.push(s[i])
        }
    }
    
    return tmp.length == 0 ? 1 : 0;
}