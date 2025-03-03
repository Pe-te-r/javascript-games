 class Car{
    constructor(x,y,width,height,color,road){
        this.x=x
        this.y=y
        this.width =width
        this.height = height
        this.color = color
        this.speed = 0        
        this.road = road
        this.centerInLane()
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
    centerInLane() {
        if (!this.road || !this.road.lanes_numbers) return;
    
        const roadCenterX = this.road.x + this.road.width / 2;
        const laneWidth = this.road.width / this.road.lanes_numbers;
    
        const centerLaneIndex = Math.floor(this.road.lanes_numbers / 2);
    
        const laneCenterX = this.road.x + centerLaneIndex * laneWidth + laneWidth / 2;
    
        this.x = laneCenterX - this.width / 2;
    }
    
}
