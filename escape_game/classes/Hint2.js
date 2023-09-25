class Hint2 extends Hint{
    constructor( container, src, x, y, width, height, velX, velY ){ 
        super(container, src, x, y, width, height, velX, velY);

        this.promptFlag=true;
    }

    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }

    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.collisionHint();
    }

    collisionHint(){
        let result=collisionCheck(this, hero ); //(나, 너)                
        if(result  ){ //충돌했다면,      
            if(this.promptFlag){
                hero.x-=hero.x;

                hint2Prompt(this);
            }
        }
    }
}