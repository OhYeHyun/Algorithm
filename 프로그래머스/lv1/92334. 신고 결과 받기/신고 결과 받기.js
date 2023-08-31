function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    let arrR = new Array(id_list.length).fill("");
    report = new Set(report);
    
    report.forEach((e) => {
        e = e.split(" ");
        arrR[id_list.indexOf(e[1])] += !!arrR[id_list.indexOf(e[1])] ? " " + e[0] : e[0] ;
    })
    
    arrR.forEach((e, idx) => {
        e = e.split(" ");
        e.length >= k ? (
            e.forEach((e) => {
                answer[id_list.indexOf(e)]++;
            })
        ) : -1;
    })
        
    return answer;
}