class EndGame extends GameObject{
    constructor( container, src, x, y, width, height, velX, velY ){ 
        super(container, x, y, width, height, velX, velY);
        this.src=src;
        this.img=document.createElement("img");
        
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
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }


}