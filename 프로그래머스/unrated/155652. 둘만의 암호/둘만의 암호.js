function solution(s, skip, index) {
    let answer = '';
    let skipCnt = 0;
    
    skipCode = skip.split('').map((e) => e.charCodeAt(0));
    sCode = s.split('').map((e) => {
        skipCnt = e.charCodeAt(0);
        for (let i = 0; i < index; i++) {
            skipCnt++;
            while (skipCode.includes(skipCnt)) skipCnt++;
            
            if (skipCnt == 'z'.charCodeAt(0) + 1) skipCnt = 'a'.charCodeAt(0)
            while (skipCode.includes(skipCnt)) skipCnt++;
        }
        return skipCnt;
        
    });
    
    answer = String.fromCharCode(...sCode)
    return answer;
}