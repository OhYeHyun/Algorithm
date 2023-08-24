function solution(babbling) {
    let answer = 0;
    let arr = ["aya", "ye", "woo", "ma"];
    let last = '';
    let boolean = true;
    let i = 0;
    
    babbling.forEach((e) => {
        console.log("-*-", e)
        boolean = true;
        i = 0;
        while (boolean) {
            if (e.includes(arr[i]) && last !== arr[i] && arr[i][0] == e[0]) {
                console.log("case1")
                console.log(arr[i])
                console.log("자르기 전 ", e);
                e = e.replace(arr[i], "");
                last = arr[i];
                console.log("자른 후 ", e, "last :", last);
                i = 0;
                if (e == "") {
                    console.log("case2")
                    last = '';
                    boolean = false;
                    answer++;
                    console.log("answer++ ", answer)
                }
            } else if (i >= 4) {
                console.log("case3")
                last = '';
                boolean = false;
            } else {
                console.log("case4")
                i++;
            }
        }
    });
    return answer;
}