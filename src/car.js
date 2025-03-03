 class Car {
    constructor(x, y, width, height, color, road) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = 0;
        this.acceleration = 0.1;
        this.road = road;
        this.friction = 0.05;
        this.maxSpeed = 4;
        this.maxReverseSpeed = -2; // Smaller maximum speed for reverse
        this.rotation = 0; // Car's rotation in radians
        this.turnSpeed = 0.03; // Turning speed
        this.key = {
            w: false,
            s: false,
            a: false,
            d: false
        };

        this.centerInLane();
        this.addKeyListners();
    }

    centerInLane() {
        if (!this.road || !this.road.lanes_numbers) return;

        const roadCenterX = this.road.x + this.road.width / 2;
        const laneWidth = this.road.width / this.road.lanes_numbers;

        const centerLaneIndex = Math.floor(this.road.lanes_numbers / 2);

        const laneCenterX = this.road.x + centerLaneIndex * laneWidth + laneWidth / 2;

        this.x = laneCenterX - this.width / 2;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
    }

    addKeyListners() {
        document.addEventListener('keydown', (event) => this.handleKeyDown(event));
        document.addEventListener('keyup', (event) => this.handleKeyUp(event));
    }

    handleKeyUp(event) {
        switch (event.key.toLowerCase()) {
            case 'w':
                this.key.w = false;
                break;
            case 's':
                this.key.s = false;
                break;
            case 'a':
                this.key.a = false;
                break;
            case 'd':
                this.key.d = false;
                break;
        }
    }

    handleKeyDown(event) {
        switch (event.key.toLowerCase()) {
            case 'w':
                this.key.w = true;
                break;
            case 's':
                this.key.s = true;
                break;
            case 'a':
                this.key.a = true;
                break;
            case 'd':
                this.key.d = true;
                break;
        }
    }

    update() {
        // Acceleration and deceleration
        if (this.key.w) {
            this.speed += this.acceleration;
        } else if (this.key.s) {
            this.speed -= this.acceleration;
        } else {
            if (this.speed > 0) {
                if(this.speed < this.friction)this.speed=0
                this.speed -= this.friction;
            } else if (this.speed < 0) {
                if(this.speed > -this.friction)this.speed=0
                this.speed += this.friction;
            }
        }

        // Speed limits
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        } else if (this.speed < this.maxReverseSpeed) {
            this.speed = this.maxReverseSpeed;
        }

        // Turning logic
        if (this.speed !== 0) {
            console.log(this.speed)
            if (this.key.a) {
                this.rotation -= this.turnSpeed;
            } else if (this.key.d) {
                this.rotation += this.turnSpeed;
            }
        }

        // Update position based on speed and rotation
        this.x += Math.sin(this.rotation) * this.speed;
        this.y -= Math.cos(this.rotation) * this.speed;
        console.log(`car x : ${this.x}`)
        console.log(`car y : ${this.y}`)
    }
}
