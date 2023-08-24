function solution(babbling) {
    let answer = 0;
    let arr = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach((e) => {
        let boolean = true;
        let i = 0;
        let last = '';
        while (boolean) {
            e.includes(arr[i]) && last !== arr[i] && arr[i][0] == e[0] ? (
                e = e.replace(arr[i], ""),
                last = arr[i],
                i = 0,
                e == "" ? (
                    boolean = false,
                    answer++ ) : -1
            )   
            : i >= 4 ? boolean = false 
            : i++;
        }
    });
    return answer;
}