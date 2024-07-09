function solution(n, info) {
    let answer = [-1];
    let max = 0;
    
    const dfs = (ap, ry, idx, arrow, cur) => {
        if (idx === 11) {
            cur[10] += arrow;
            
            if ((ry - ap) > max) {
                max = ry - ap;
                answer = [...cur];
            }
            if ((ry - ap) === max) {
                for (let i = 10; i >= 0; i--) {
                    if (answer[i] < cur[i]) {
                        answer = [...cur];
                        break;
                    } else if (answer[i] > cur[i]) {
                        break;
                    }
                }
            }
            
            cur[10] -= arrow;
            return;
        }
        
        if (arrow >= info[idx] + 1) {
            cur[idx] = info[idx] + 1;
            dfs(ap, ry + (10 - idx), idx + 1, arrow - cur[idx], cur);
            cur[idx] = 0;
        }
        if (info[idx] > 0) {
            dfs(ap + (10 - idx), ry, idx + 1, arrow, cur);
        } else {
            dfs (ap, ry, idx + 1, arrow, cur)
        }
    }
    
    dfs(0, 0, 0, n, new Array(11).fill(0));
    
    if (max <= 0) {
        return [-1];
    }
    
    return answer;
}