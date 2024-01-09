function solution(friends, gifts) {
    let final = [];
    let size = friends.length;
    let answer = new Array(size).fill(0);
    
    for (let i = 0; i < size; i++) {
        let cnt = 0;
        
        gifts.forEach((e) => {
            let [from, to] = e.split(" ");
            if (from == friends[i]) cnt += 1;
            if (to == friends[i]) cnt -= 1;
        })
        
        final.push(cnt)
    }
    
    for (let i = 0; i < size; i++) {
        let give = new Array(size).fill(0);
        let receive = new Array(size).fill(0);
        
        gifts.forEach((e) => {
            let [from, to] = e.split(" ");
            if (from == friends[i]) give[friends.indexOf(to)]++;
            if (to == friends[i]) receive[friends.indexOf(from)]++;
        })
        
        for (let j = 0; j < size; j++) {
            if (i == j) continue;
            if (receive[j] == give[j] && final[i] > final[j]) answer[i]++;
            if (receive[j] < give[j]) answer[i]++;
        }
    }
    
    return Math.max(...answer);
}