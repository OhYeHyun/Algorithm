function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    let answer = [];
    let carMap = new Map([]);
    let feeMap = new Map([]);
    
    records.forEach((e) => {
        let [time, car, boolean] = e.split(" ");
        let [h, m] = time.split(":").map(Number);
        time = h * 60 + m; 
        if (boolean === "IN") {
            carMap.set(car, time);
        } else {
            let passedTime = time - carMap.get(car);
            let totalTime = (feeMap.has(car) ? feeMap.get(car) + passedTime : passedTime);
            feeMap.set(car, totalTime);
            carMap.delete(car)
        }
    })
    if (carMap.size) {
        for (let keys of carMap.keys()) {
            let passedTime = (23 * 60 + 59) - carMap.get(keys);
            let totalTime = (feeMap.has(keys) ? feeMap.get(keys) + passedTime : passedTime);
            feeMap.set(keys, totalTime);
        }
    }
    [...feeMap].sort((a, b) => +a[0]- +b[0]).forEach((e) => {
        let time = e[1];
        let fee = basicFee;
        if (time > basicTime) fee += Math.ceil((time - basicTime) / unitTime) * unitFee;
        
        answer.push(fee)
    })
    return answer;
}