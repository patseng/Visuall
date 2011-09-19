alert("Wtf");
var context = $('#canvas')[0].getContext("2d");
context.beginPath();
context.arc(75,75,10,0,Math.PI*2, true);
context.closePath();
context.fill();
