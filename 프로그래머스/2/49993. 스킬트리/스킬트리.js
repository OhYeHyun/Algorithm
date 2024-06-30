function solution(skill, skill_trees) {
    let answer = 0;
        
    skill_trees.forEach((e) => {
        let stack = [...skill];
        let eachSkill = e.split("");
        let boolean = true;

        for (let i = 0; i < eachSkill.length; i++) {
            if (stack.includes(eachSkill[i])) {
                if (stack[0] === eachSkill[i]) {
                    stack.shift();
                    continue;
                } else {
                    boolean = false;
                    break;
                }
            }
        }
        if (boolean) answer++;
    })
    
    return answer;
}