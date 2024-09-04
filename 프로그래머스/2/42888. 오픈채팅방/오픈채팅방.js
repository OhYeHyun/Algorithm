function solution(record) {
    const answer = [];
    const userMap = new Map();
    const commandMap = {"Enter" : "들어왔습니다.", "Leave" : "나갔습니다."};
    
    record.forEach((message) => {
        const [command, id, name] = message.split(" ");
        
        if (command === 'Change' || command === 'Enter') {
            userMap.set(id, name);
        }
        
        if (commandMap[command]) {
            answer.push([id, `님이 ${commandMap[command]}`])
        }
    })
    
    return answer.map((user) => {
        const id = user[0]
        const name = userMap.get(id);
        user[0] = name;
    
        return user.join('');
    })
}