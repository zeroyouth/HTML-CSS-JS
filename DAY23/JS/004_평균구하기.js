let 전교점수 = [
    // 1반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    
];
/*
(전교점수[0][1][0] + 전교점수[0][1][1] + 전교점수[0][1][2] + 전교점수[0][1][3] + 전교점수[0][1][4]) / 5
*/

let 총합2 = 0;
for(let i=0; i < 5; i++){
    총합2 += 전교점수[0][1][i];
} 
console.log(총합2/5);
