function solution(n, info) {
    let maxDiff = 0;
    let answer = [-1];
    
    function dfs(apeachPoints, ryanPoints, arrows, index, current) {
        if (index === 11) {
            current[10] += (n - arrows);
            let diff = ryanPoints - apeachPoints;
            if (diff > maxDiff) {
                maxDiff = diff;
                answer = current.slice();
            } else if (diff === maxDiff) {
                for (let i = 10; i >= 0; i--) {
                    if (current[i] > answer[i]) {
                        answer = [...current];
                        break;
                    } else if (current[i] < answer[i]) {
                        break;
                    }
                }
            }
            current[10] -= (n - arrows);
            return;
        }
        
        if (arrows + info[index] + 1 <= n) {
            current[index] = info[index] + 1;
            dfs(apeachPoints, ryanPoints + (10 - index), arrows + current[index], index + 1, current);
            current[index] = 0;
        }
        
        if (info[index] > 0) {
            dfs(apeachPoints + (10 - index), ryanPoints, arrows, index + 1, current);
        } else {
            dfs(apeachPoints, ryanPoints, arrows, index + 1, current);
        }
    }
    
    dfs(0, 0, 0, 0, new Array(11).fill(0));
    
     if (maxDiff <= 0) {
        return [-1];
    }

    return answer;
}