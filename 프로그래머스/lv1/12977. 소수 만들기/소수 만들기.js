function solution(nums) {
    let answer = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let a = nums[i] + nums[j] + nums[k], cnt = 0;
                for (let p = 2; p < a; p++) {
                    a % p !== 0 ? -1 : cnt++;
                }
                cnt == 0 ? answer++ : -1;
            }
        }
    }
    
    return answer;
}