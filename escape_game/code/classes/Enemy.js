class Enemy extends GameObject{
    constructor( container, src, x, y, width, height, velXLeft, velX, velY ){ 
        super(container, x, y, width, height, velX, velY);
        this.src=src;
        this.img=document.createElement("img");
        this.enemeyStep;
        this.velXLeft=velXLeft;
        
        this.img.src=this.src;
        //스타일 적용
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        //부착
        this.container.appendChild(this.img);

    }

    
    tick(){                 
        this.enemeyStep = (flag) ? 1 : -1 ;
        this.x+=this.enemeyStep;       
    
        if(this.x<=this.velXLeft || this.x>=this.velX){
            flag=!flag;
        }     
    }

    coll(){

        let result=collisionCheck(this, hero );               
        if(result  ){                
            this.width=(this.width+10)+"px";
            this.height=this.height+10;
            
        }
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }




}