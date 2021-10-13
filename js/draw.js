'use strict';
var figure = document.getElementById('figure');
var canvas = figure.getContext('2d');
const size = 500;
canvas.canvas.width=size;
canvas.canvas.height=size;

for (var i = 0; i <= size; i += 10) {
    drawLine([0, i], [i, size], 'blue');
    drawLine([i, size], [size, size - i], 'green');
    drawLine([size, size - i], [size - i, 0], 'yellow');
    drawLine([size - i, 0], [0, i], 'red');
}

function drawLine(begin, final, color = 'red') {
    canvas.beginPath();
    canvas.strokeStyle = color;
    canvas.moveTo(begin[0], begin[1]);
    canvas.lineTo(final[0], final[1]);
    canvas.stroke();
    canvas.closePath();
}