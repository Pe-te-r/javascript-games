
class Game{
    constructor(width,height,canvas,ctx){
        this.width = width
        this.height = height
        this.canvas=canvas 
        this.ctx = ctx
        this.canvas.color
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.road = new Road(this.width/3,0,300,'black',ctx,3)
        this.car = new Car(this.road.x+40,this.height-100,40,60,'red',this.road)
        this.car_bots=[new CarBot(this.ctx,this.road,this.road.x+70,this.height-300),new CarBot(this.ctx,this.road,200,200)]
        this.camera = new Camera(this.car,this.car_bots,this.road,this.width,this.height)
    }
    mainloop(){
        this.camera.update()
        this.camera.render(this.ctx)
        this.car.update()
     requestAnimationFrame(()=>this.mainloop())
        }
}
