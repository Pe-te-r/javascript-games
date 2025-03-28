class Road{
    constructor(x,y,width,color,ctx,lane_number=3){
        this.x=x
        this.y=y
        this.width=width
        this.color=color
        this.lanes_numbers=lane_number
        this.ctx=ctx
       this.draw(ctx) 
    }
    draw(ctx){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,ctx.canvas.height *-100)

        const laneWidth = this.width/this.lanes_numbers

        for (let i = 1; i < this.lanes_numbers; i++) {
            ctx.setLineDash([30, 20])
            ctx.beginPath()
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 5
            ctx.moveTo(this.x + i * laneWidth, this.y)
            ctx.lineTo(this.x + i * laneWidth, this.y + ctx.canvas.height*-100)
            ctx.stroke()
        }
    }
 
    
   
}