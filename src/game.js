
class Game{
    constructor(width,height,canvas,ctx){
        this.width = width
        this.height = height
        this.canvas=canvas 
        this.ctx = ctx
        this.canvas.color
        this.canvas.width = this.width
        this.canvas.height = this.height
        new Road(this.width/3,0,300,'black',ctx)
    }
     start(){
        const car = new Car(0,0,10,10,'red')
        car.draw(this.ctx)
    }
}
