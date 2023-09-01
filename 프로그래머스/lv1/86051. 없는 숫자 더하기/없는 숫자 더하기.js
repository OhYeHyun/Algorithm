function solution(numbers) {
    let answer = 0;
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    answer = arr.filter((item) => !numbers.includes(item)).reduce((acc, cur) => acc += cur);

    return answer;
}