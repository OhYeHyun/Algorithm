function solution(dartResult) {
    let answer = 0;
    let dart = dartResult.split("");
    let firstTmp = 0, secondTmp = 0;
    const bonus = new Map([["S", 1], ["D", 2], ["T", 3]]);
    
    for (let i = 0; i < dart.length; i++) {
        let e = dart[i];
        e == "*" ?
            (firstTmp *= 2, secondTmp *= 2) : (
            e == "#" ?
                secondTmp *= -1 : (!isNaN(e) ? 
                    ((dart[i + 1] == 0 ? (e = +(e.toString() + dart[i + 1].toString()), i++) : -1), 
                    (secondTmp !== 0 ? (answer += firstTmp, firstTmp = secondTmp, secondTmp = 0) : -1), 
                    secondTmp = e) : secondTmp **= bonus.get(e)));
    }  
    answer = answer + firstTmp + secondTmp;
    
    return answer;
}