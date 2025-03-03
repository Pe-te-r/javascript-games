class Road{
    constructor(x,y,width,color,ctx,lane_number=3){
        this.x=x
        this.y=y
        this.width=width
        this.color=color
        this.lanes_numbers=lane_number
       this.draw(ctx) 
    }
    draw(ctx){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,ctx.canvas.height)
    }
    setLanes(){
        
    }
}