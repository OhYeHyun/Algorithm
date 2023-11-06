function solution(nums) {
    let answer = 0;
    let set = new Set([...nums]);
    
    answer = set.size > nums.length / 2 ? nums.length / 2 : set.size;
    
    return answer;
}