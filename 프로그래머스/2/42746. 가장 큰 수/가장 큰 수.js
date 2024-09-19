function solution(numbers) {    
    numbers.sort((a, b) => {
        const strA = a.toString();
        const strB = b.toString();
        
        const strAB = strA + strB;
        const strBA = strB + strA;

        return strBA - strAB;
    });
    
    const sum = numbers.reduce((acc, cur) => acc + cur, 0)
   
    return sum === 0 ? "0" : numbers.join("");
}
