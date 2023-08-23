function solution(ingredient) {
    let answer = 0;
    let idx = 0;
    let boolean = true;
    
    while (boolean) {
        if (ingredient[idx] == 1 && ingredient[idx + 1] == 2 && ingredient[idx + 2] == 3 && ingredient[idx + 3] == 1) {
            answer++;
            ingredient.splice(idx, 4);
            if (idx !== 0) {
                idx = idx - 3;
            }
        } else if (idx > ingredient.length - 3) {
            boolean = false;
        } else {
            idx++;
        }
    }
    return answer;
}