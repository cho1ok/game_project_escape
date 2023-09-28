class Bullet{
    constructor( container, src, x, y, width, height ,velX, velY ){
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;
        this.width=width;
        this.height=height;

        //스타일 적용
        this.img.src=this.src;
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        //부착
        this.container.appendChild(this.img);

    }

    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }

    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.removeWithEnemy(); //스크린 만나는것보다 적군 만나서 제거되는게 먼저 호출되어야
        this.removeFromScreen(); //렌더에서 수행되어야 에러가 안난다..
    }

    removeWithEnemy(){
        //현재 존재하는 적군 수 만큼 반복하면서 총알과 적군이 닿았는지 판단하자
        for(let i=0 ; i<enemyArray.length ; i++){

            let result=collisionCheck(this, enemyArray[i] ); //(나, 너)

            if(result){ //충돌했다면,                                               

                //1)화면에서 제거(총알, 적군 둘다)
                //총알
                this.container.removeChild(this.img);
                //적군
                this.container.removeChild(enemyArray[i].img);

                //2)배열에서 제거(총알, 적군 둘다) 
                //총알
                let index=bulletArray.indexOf(this); //총알인 내가 어디에 들어있는지
                bulletArray.splice(index,1);
                //적군
                index=enemyArray.indexOf(enemyArray[i]); //적군이 어디에 들어있는지
                enemyArray.splice(index,1);                    
            }
        }
    }

    removeFromScreen(){    
        //총알인 내가 스크린을 넘어서면, 제거되자

        if(this.x > screen.width){
            //1)화면에서 제거
            this.container.removeChild(this.img); //엘리먼트 제거

            //2)배열에서 제거
            let index = bulletArray.indexOf(this); //내가 소속된 index를 추출해야 //() 안에 조사대상객체가 들어감. 불릿어레이에 푸쉬한건 불렛 자체였으니,
                                                                //this.img가 아니라 this가 들어감
            bulletArray.splice( index ,1); 
        }
    }
}