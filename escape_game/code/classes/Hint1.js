class Hint1 extends Hint{

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
        //this.clickPop();
    }


    collisionHint(){
        
        let result=collisionCheck(this, hero ); //(나, 너)                
        if(result  ){ //충돌했다면,   
            
            if(this.promptFlag){
                hero.y+=hero.y;

                hint1Prompt(this);
            }

            
            //main();
            
        }
        
    }
    
    /*
    
    clickPop(){
        
        this.img.addEventListener("click", function(){
            hint1Prompt();
        });
        
    }
    */


}