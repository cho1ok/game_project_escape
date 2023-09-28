class Escape extends GameObject{

    constructor(container, color, x, y, width, height, velX, velY){
        super(container, x, y, width, height, velX, velY);

        this.color=color;        

        this.div.style.background=this.color;

        

        this.promptFlag=true;

    }

    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }

    render(){

        if(this.promptFlag){

            this.div.style.left=this.x+"px";
            this.div.style.top=this.y+"px";
        }

        this.collisionHint();
    }

    collisionHint(){

        let result=collisionCheck(this, hero ); //(나, 너)                
        if(result  ){ //충돌했다면,      
            if(this.promptFlag){
                hero.x= -10+"px";


            }
        }
    }



  
    






    



}