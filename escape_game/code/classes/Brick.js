class Brick extends GameObject{
    constructor(container, color, x, y, width, height, velX, velY){
        super(container, x, y, width, height, velX, velY);

        this.div.style.background=color;
    }
}