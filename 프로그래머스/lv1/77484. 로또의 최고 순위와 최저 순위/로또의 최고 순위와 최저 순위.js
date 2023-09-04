function solution(lottos, win_nums) {
    let answer = [];
    let count = 0;
    let zero = 0;
    
    lottos.forEach((e) => {
        win_nums.includes(e) ? count++ : (e == 0 ? zero++ : -1);
    });
   
    answer = [ count == 0 && zero == 0 ? 6 : 7 - count - zero , count == 0 ? 6 : 7 - count];
    
    return answer;
}