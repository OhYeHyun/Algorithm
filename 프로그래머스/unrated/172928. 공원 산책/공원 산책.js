
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
function solution(park, routes) {
    let result = [];
    park.forEach((e) => {
        for (let i = 0; i < e.length; i++) {
            e[i] == "S" ? result = [park.indexOf(e), e.indexOf("S")] : -1;
        }
    })

    routes.forEach((e) => {
        let num = Number(e[2]);
        let direction = e[0];
        let i;
        let backUp = [result[0], result[1]];

        if (direction == "N" && result[0] >= num) {
            for (i = 1; i <= num; i++) {
                if (park[result[0] - 1][result[1]] == "O" || park[result[0] - 1][result[1]] == "S") {
                    result = [result[0] - 1, result[1]];
                } else {
                    result = [backUp[0], backUp[1]];
                    i = num + 1;
                }
            }
            backUp = [result[0], result[1]];
        }
        if (direction == "S" && park.length - result[0] - 1 >= num) {
            for (i = 1; i <= num; i++) {
                if (park[result[0] + 1][result[1]] == "O" || park[result[0] + 1][result[1]] == "S") {
                    result = [result[0] + 1, result[1]];
                } else {
                    result = [backUp[0], backUp[1]];
                    i = num + 1;
                }
            }
            backUp = [result[0], result[1]];
        }
        if (direction == "W" && result[1] >= num) {
            for (i = 1; i <= num; i++) {
                if (park[result[0]][result[1] - 1] == "O" || park[result[0]][result[1] - 1] == "S") {
                    result = [result[0], result[1] - 1];
                } else {
                    result = [backUp[0], backUp[1]];
                    i = num + 1;
                }
            }
            backUp = [result[0], result[1]];
        }        
        if (direction == "E" && park[0].length - result[1] - 1 >= num) {
            for (i = 1; i <= num; i++) {
                if (park[result[0]][result[1] + 1] == "O" || park[result[0]][result[1] + 1] == "S") {
                    result = [result[0], result[1] + 1];
                } else {
                    result = [backUp[0], backUp[1]];
                    i = num + 1;
                }
            }
            backUp = [result[0], result[1]];
        }
    })
    return result;    
}