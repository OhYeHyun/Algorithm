function solution(new_id) {
    let answer = '';
    
    answer = new_id
        .toLowerCase()
        .replace(/[^-_.a-z0-9]/g, "")
        .replace(/\.+/g, ".")
        .replace(/^\./, "")
        .replace(/^$/, "a")
        .substring(0, 15)
        .replace(/\.$/, "");

    answer.length < 3 ? answer += answer.at(-1).repeat(3 - answer.length) : -1;
    
    return answer;
}