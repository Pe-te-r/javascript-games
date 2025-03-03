 class Car{
    constructor(x,y,width,height,color,road){
        this.x=x
        this.y=y
        this.width =width
        this.height = height
        this.color = color
        this.speed =0
        this.acceleration=.01
        this.road = road
        this.friction =0.05
        this.maxSpeed = 4
        this.key={
            w:false,
            s:false,
            a:false,
            d:false
        }

        this.centerInLane()
        this.addKeyListners()
    }

    centerInLane() {
        if (!this.road || !this.road.lanes_numbers) return;
    
        const roadCenterX = this.road.x + this.road.width / 2;
        const laneWidth = this.road.width / this.road.lanes_numbers;
    
        const centerLaneIndex = Math.floor(this.road.lanes_numbers / 2);
    
        const laneCenterX = this.road.x + centerLaneIndex * laneWidth + laneWidth / 2;
    
        this.x = laneCenterX - this.width / 2;
    }

    draw(ctx){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }
    
    addKeyListners(){
        document.addEventListener('keydown',(event)=>this.handleKeyDown(event))
        document.addEventListener('keyup',(event)=>this.handleKeyUp(event))
    }

    handleKeyUp(event){
        console.log(this.key)
        switch (event.key.toLowerCase()){
            case 'w':
                this.key.w=false
                break
            case 's':
                this.key.s=false
                break
            case 'a':
                this.key.a=false
                break
            case 'd':
                this.key.d=false
                break
        }
    }
    handleKeyDown(event){
        console.log(event)
        switch (event.key.toLowerCase()){
            case 'w':
                this.key.w=true
                break
            case 's':
                this.key.s=true
                break
            case 'a':
                this.key.a=true
                break
            case 'd':
                this.key.d=true
                break
        }
    }

    update(){
        if(this.key.w){
            this.speed += this.acceleration
        }else if(this.key.s){
            this.speed -= this.acceleration
        }else{
            if(this.speed>0){
                this.speed -= this.friction
            }else if(this.speed<0){
                this.speed += this.friction
            }
        }
        
        if(this.speed >this.maxSpeed){
            this.speed = this.maxSpeed
        }else if(this.speed<-this.maxSpeed){
            this.speed = -this.maxSpeed
        }
        
        this.y -= this.speed

        
        if(this.key.a){
            this.x -=2
        }else if(this.key.d){
            this.x +=2
        }
    }
    
}
