function solution(routes) {
    let answer = 1;
    routes = routes.sort((a, b) => a[1] - b[1])
    
    let cctv = routes[0][1];
    for (let i = 1; i < routes.length; i++) {
        const [curS, curE] = routes[i];
        if (curS <= cctv) {
            continue;
        } else {
            cctv = curE;
            answer++;
        }
    }
    
    return answer;
}