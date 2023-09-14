function solution(n, lost, reserve) {
    let answer = n - lost.length;
    lost.sort((a, b) => a - b);

    lost = lost.filter((e) => {
        return reserve.includes(e) ? (reserve.splice(reserve.indexOf(e), 1), answer++, false) : true;
    })

    lost.forEach((e) => {
        reserve.includes(e - 1) ? 
            (reserve.splice(reserve.indexOf(e - 1), 1), answer++) : 
            (reserve.includes(e + 1) ? 
                (reserve.splice(reserve.indexOf(e + 1), 1), answer++) : -1);
    });
    
    return answer;
}