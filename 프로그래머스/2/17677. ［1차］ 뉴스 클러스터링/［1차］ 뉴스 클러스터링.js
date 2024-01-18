function solution(str1, str2) {
    let answer = 0;

    str1 = str1.toUpperCase();
    str1 = str1.split("").map((item, idx) => item += str1[idx + 1]).filter((item) => (/[A-Z]{2}/g).test(item));
    str2 = str2.toUpperCase()
    str2 = str2.split("").map((item, idx) => item += str2[idx + 1]).filter((item) => (/[A-Z]{2}/g).test(item));
    
    let a = 0, b = str2.length;
    
    let copyA = [...str2];
    let copyB = [...str2];

    for (let i = 0; i < str1.length; i++) {
        let str = str1[i];
        if (!copyB.includes(str)) {
            b++;
        } else {
            copyB.splice(copyB.indexOf(str), 1);
        }
        if (copyA.includes(str)) {
            a++;
            copyA.splice(copyA.indexOf(str), 1);
        }
    }

    answer = Math.floor((a / b) * 65536);
    
    return b == 0 ? 65536 : answer;
}