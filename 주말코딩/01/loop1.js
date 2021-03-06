/* ## break와 continue 
continue는 break의 가벼운 버전이다. 
- continue는 전체 반목문을 멈추지 않고 현재 실행중인 본문을 넘기고 다음 본문을 강제로 실행시키도록 한다. 즉 다음 반복으로 넘어가는 것이다. (조건이 True일때)
- break는 특별지시자임. 조건이 false가 되지 않았음에도 반복문을 빠져나오게 한다. 반복문을 종료시킴 */

let i = 0;
for(;;) { //무한루프가 됨
    ++i;
    if (i%2 === 0) continue; //짝수 일때를 본문은 실행되지 않는다. 짝수는 넘기고 다음 반복으로 넘어감
    console.log(i); //즉 홀수만 찍힘.
    if (i >= 20) break; //반복문 빠져나오기 i가 20이상일때 반복문 빠져나옴.
} 

