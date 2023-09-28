class Key{
    constructor(container, src, x, y, width, height, velX, velY){

            this.container=container; 
            this.img=document.createElement("img");
            this.img.src=src;
            this.x=x;
            this.y=y;
            this.width=width;
            this.height=height;
            this.velX=velX;
            this.velY=velY;
            
            this.img.style.position="absolute";
            this.img.style.left=this.x+"px";
            this.img.style.top=this.y+"px";
            this.img.style.width=this.width+"px";
            this.img.style.height=this.height+"px";        
    
            this.container.appendChild(this.img);
    

            this.promptFlag=true;

    }

    tick(){
        this.x=hero.x-10;
        this.y=hero.y+40;

    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.collisionHint();
        //this.clickPop();
    }

    collisionHint(){
        
       // let result=collisionCheck(this, hero ); //(나, 너)                
       // if(result  ){ //충돌했다면,   
            
            //if(this.promptFlag){
            //    hero.y= -10;

            //    lastQuestion(this);
           // }
            
      //  }
    


    //for(let i=(mapArray.length-2);i<=(mapArray.length-1);i++){
    //    for(let a=30;a<(30+20);a++){
            //console.log(map[i][a]);


            if(this.promptFlag){

                // let doorIndex=mapArray[i][a];
                
                let result=collisionCheck(this, door1);
                
                if (result) {
                    
                    lastQuestion(this);
                    
                    
                    //map[i][a]=0;
                    //console.log(map);
                    
                    //}else if(result==false){
                        //    lastQuestion(this);
                    }
                }
            }
            //hintObj.promptFlag = true;

      //  }
  //  }


}
