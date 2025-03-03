 class Car{
    constructor(x,y,width,height,color){
        this.x=x
        this.y=y
        this.width =width
        this.height = height
        this.color = color
        this.speed = 0        
    }
    update(){

    }
    draw(ctx){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }
    start(){
        console.log(`The ${this.brand} is starting`)
    }
}
