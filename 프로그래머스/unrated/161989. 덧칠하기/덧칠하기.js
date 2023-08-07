function solution(n, m, section) {
    let [start, end] = [0, 0];
    let num = 0;
    while (section.length) {
        if (num % 2 == 0) {
            [start, end] = [section[0], section[0] + m - 1];
            num++; 
        } else {
            [start, end] = [section[section.length - 1] - m + 1, section[section.length - 1]];
            num++;
        }
        for (let i = start; i <= end; i++) {
            if (section.includes(i)) section.splice(section.indexOf(i), 1);
        }
    }
    return num;
}