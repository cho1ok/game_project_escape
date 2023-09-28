 //랜덤값 계산이 귀찮고 번거롭지만, 앞으로 자주 사용될 가능성이 높으므로, 함수로 정의해놓고 재사용하자
 function getRandom(n){
    return parseInt(Math.random()*n); //Math.random() :  0~1 미만의 소수점들. 절대 1이 될수없음. 뒤에 원하는 수를 곱해줌
}                                                      // 그 수를 매개변수로 설정해줌으로서 변경 가능.


/*범위가 있는 랜덤값
    min : 시작값
    max : 끝값
    예) 원하는 시작값이 5이고, 끝값이 8이라면
     Math.random()에 몇을 곱해야 하는가?
*/
function getRandomWithRange(min, max){
    var result= min + parseInt(Math.random()*(max-min+1) );
    return result;
}


/* ------------------------------------------------------------------------------------
게임 개발시 사용될 충돌 체크 함수
---------------------------------------------------------------------------------------*/
function collisionCheck(me, you){
    //충돌여부 판단  //me 가 원래는 this였고, you가 rect2였는데, 라이브러리에 따로 빼서 저장하면서 범용성을 위해서 명칭을 바꿈
    let result1=(me.y+me.height >= you.y) &&  (me.x+me.width >= you.x) ; //북서
    let result2=(me.x+me.width >= you.x) && (me.y <= you.y + you.height) ; //남서
    let result3=(me.x<= you.x+you.width) && (me.y+me.height >= you.y); //북동
    let result4=(me.x <= you.x+you.width) && (me.y <= you.y+you.height); //남동
    
    return result1 && result2 && result3 && result4;
    
} //이걸 보면 알수있는게, 매개변수에 들어오는 값이 이 함수 안의 같은 모양을 한 모든 변수에 똑같이 대입이 되는거고,
    //리턴값을 가진다는건, 그 값들이 적용, 대입된 최종의 값이 리턴값에 담긴채 매개변수를 보냈던 그 호출자(?)에게 돌아가서
    //그 리턴값이 이제 그 호출자 자리에 대신 들어가는거임