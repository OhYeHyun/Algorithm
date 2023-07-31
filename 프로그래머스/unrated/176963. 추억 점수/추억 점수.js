function solution(name, yearning, photo) {
    let answer = [];
    let map = new Map();
    for(let i = 0; i < name.length; i ++) {
        map.set(name[i], yearning[i]);
    }
    photo.forEach((e) => {
        e = e.filter(name => map.has(name) == true);
        sum = e.reduce((acc, curr) => {
            return acc + map.get(curr)}, 0)
        answer.push(sum);
    })        
    return answer;
}
