function solution(numbers) {    
    numbers.sort((a, b) => {
        const strA = a.toString();
        const strB = b.toString();

        return (strB + strA) - (strA + strB);
    });

    return numbers[0] === 0 ? "0" : numbers.join("");
}
