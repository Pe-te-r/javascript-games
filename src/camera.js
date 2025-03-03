class Camera {
    constructor(car, road, canvasWidth, canvasHeight) {
        this.car = car;
        this.road = road;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    // Update the camera's position based on the car's position
    update() {
        // Calculate the offset to keep the car centered
        this.offsetX = this.canvasWidth / 2 - this.car.x;
        this.offsetY = this.canvasHeight / 2 - this.car.y;
    }

    // Render the world (road, car, etc.) relative to the camera's position
    render(ctx) {
        // Clear the canvas
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        // Save the current canvas state
        ctx.save();

        // Translate the canvas based on the camera's offset
        ctx.translate(this.offsetX, this.offsetY);

        // Draw the road
        this.road.draw(ctx);

        // Draw the car (centered)
        this.car.draw(ctx);

        // Restore the canvas state
        ctx.restore();
    }
}