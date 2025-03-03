
function init(){
    canvas = document.getElementById('canvas')
    ctx = this.canvas.getContext('2d')
    console.log('Canvas',canvas)
    const game= new Game(800,600,canvas,ctx)
    game.start()
}

window.onload=init