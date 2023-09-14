function solution(n, lost, reserve) {
    let answer = n - lost.length;
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    lost = lost.filter((e) => {
        return reserve.includes(e) ? (reserve.splice(reserve.indexOf(e), 1), answer++, false) : true;
    })

    lost.forEach((e) => {
        let eNum = reserve.find((a) => Math.abs(e - a) == 1);
        !!eNum ? (reserve.splice(reserve.indexOf(eNum), 1), answer++) : -1;
    });
    
    return answer;
}