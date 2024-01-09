function solution(bandage, health, attacks) {
    let last = attacks.at(-1)[0];
    let hp = health;
    let success = 0;
    
    for (let i = 1; i <= last; i++) {
        let attack = attacks[0];
              
        if (i == attack[0]) {
            hp -= attack[1];
            success = 0;
            attacks.shift();
        } else {
            success += 1;
            hp += bandage[1];
            if (bandage[0] == success) {
                hp += bandage[2];
                success = 0;
            }
        }
    
        if (hp > health) hp = health;
        if (hp <= 0) {
            return -1;
        }
    }
    
    return hp;
}