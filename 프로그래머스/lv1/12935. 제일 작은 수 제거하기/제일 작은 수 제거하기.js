function solution(arr) {
    let arrCopy = [...arr];
    arr.splice(arr.indexOf(arrCopy.sort((a, b) => b - a).at(-1)), 1);
    
    return arr.length == 0 ? [-1] : arr;
}