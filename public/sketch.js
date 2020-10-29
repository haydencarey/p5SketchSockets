let socket = io();

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(51)

    socket.on('data', function(mousePos) {
        console.log(mousePos)
        noStroke();
        fill(255, 0, 255)
        ellipse(mousePos.mouseX, data.mouseY, 60, 60)
    })
}

function mouseDragged() {
    console.log('sending' + mouseX + ',' + mouseY)

    let mousePos = {
        x: mouseX,
        y: mouseY
    }
    noStroke();
    fill(255)
    ellipse(mouseX, mouseY, 60, 60)

    socket.emit('data', mousePos)

}

function draw() {


}