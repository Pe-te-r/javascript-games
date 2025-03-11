class CarBot {
    constructor(ctx, road, x, y, width = 50, height = 50, color = 'blue') {
        this.ctx = ctx;
        this.road = road;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.rotation = 0; // Car's rotation in radians
        this.speed = 2; // Current speed
        this.acceleration = 0.1; // Acceleration rate
        this.friction = 0.02; // Friction to slow down the car
        this.maxSpeed = 5; // Maximum forward speed
        this.maxReverseSpeed = -2; // Maximum reverse speed
        this.turnSpeed = 0.03; // Turning speed

        this.centerInLane();
    }

    // Center the car in the middle lane of the road
    centerInLane() {
        if (!this.road || !this.road.lanes_numbers) return;

        const laneWidth = this.road.width / this.road.lanes_numbers;
        const centerLaneIndex = Math.floor(this.road.lanes_numbers / 2);
        const laneCenterX = this.road.x + centerLaneIndex * laneWidth + laneWidth / 2;

        this.x = laneCenterX - this.width / 2;
    }

    // Draw the car on the canvas
    draw() {
        this.ctx.save();
        this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        this.ctx.rotate(this.rotation); // Apply rotation
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        this.ctx.restore();
    }

    // Update the car's position, speed, and rotation
    update() {
        // Apply friction to slow down the car ii
        // if (this.speed > 0) {
        //     this.speed -= this.friction;
        // } else if (this.speed < 0) {
        //     this.speed += this.friction;
        // }

        // Prevent the car from turning if it's not moving
        if (Math.abs(this.speed) > 0) {
            // Example: Turn left or right based on some logic (e.g., AI or user input)
            // this.rotation += this.turnSpeed; // Example: Turn right
        }

        // Update the car's position based on speed and rotation
        this.x += Math.sin(this.rotation) * this.speed;
        this.y -= Math.cos(this.rotation) * this.speed;

        // Ensure the car stays within the road boundaries
        this.constrainToRoad();
    }

    // Constrain the car to stay within the road boundaries
    constrainToRoad() {
        if (this.x < this.road.x) {
            this.x = this.road.x;
        } else if (this.x + this.width > this.road.x + this.road.width) {
            this.x = this.road.x + this.road.width - this.width;
        }
    }
}