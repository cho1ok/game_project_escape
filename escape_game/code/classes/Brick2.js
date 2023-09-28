class Brick2 extends GameObject{
    constructor(container, color, x, y, width, height, velX, velY){
        super(container, x, y, width, height, velX, velY);

        this.color=color;        

        this.div.style.background="rgb(215, 248, 237)";
    }
}