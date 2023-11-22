function solution(clothes) {
    let answer = 1;
    let map = new Map([]);
    
    clothes.forEach((e) => {
        let style = e[1];
        map.has(style) ? map.set(style, map.get(style) + 1) : map.set(style, 1)
    })

    map.forEach((value, key) => {answer *= (value + 1)})
    
    return answer - 1;
}