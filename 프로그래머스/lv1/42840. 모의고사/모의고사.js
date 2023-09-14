function solution(answers) {
    let answer = [];
    let right = [0, 0, 0];
    
    answers.forEach((e, idx) => {

        const arrA = [1, 2, 3, 4, 5]
        let a = arrA[idx % arrA.length];
        e == a ? right[0]++ : -1;

        const arrB = [2, 1, 2, 3, 2, 4, 2, 5];
        let b = arrB[idx % arrB.length];
        e == b ? right[1]++ : -1;

        const arrC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
        let c = arrC[idx % arrC.length];
        e == c ? right[2]++ : -1;
    })  
    
    let rightC = [...right];
    const high = rightC.sort((a, b) => b - a)[0];

    for (let i = 0; i < right.length; i++) {
        right[i] == high ? answer.push(i + 1) : -1;
    }
    
    return answer;
}