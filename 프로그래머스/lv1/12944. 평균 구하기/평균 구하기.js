function solution(arr) {
    return arr.reduce((acc, cur, idx) => {
        if (idx == arr.length - 1) {
            return (acc + cur) / arr.length;
        } else {
            return acc + cur
        }
    }, 0)
}