function solution(new_id) {
    let answer = '';
    
    new_id = new_id.toLowerCase();    

    new_id = new_id.replace(/[^-_.a-z0-9]/g, "");
    new_id = new_id.replace(/\.+/g, ".");
    new_id = new_id.replace(/^\./g, "");
    
    if (!new_id) new_id = "a";
    
    new_id = new_id.substring(0, 15);
    new_id = new_id.replace(/\.$/g, "");
    
    while (new_id.length <= 2) new_id.length > 3 ? -1 : new_id += new_id.at(-1);
    
    answer = new_id;
    
    return answer;
}