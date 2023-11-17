function solution(s) {
    let answer = s.length;
    let n = s.length;
    s += s;
    
    for (let i = 0; i < n; i++) {
        let arr = s.slice(i, i + n).split("");
        let checkArr = [];

        for (let j = 0; j < n; j++) {
            const left = ["(", "{", "["], right = [")", "}", "]"];
            if (left.includes(arr[j])) {
                checkArr.push(arr[j]);
            } else if (right.indexOf(arr[j]) == left.indexOf(checkArr.at(-1))) {
                checkArr.pop();
            } else {
                answer--;
                break;
            }
        }
    }
    
    return n % 2 !== 0 ? 0 :answer;
}