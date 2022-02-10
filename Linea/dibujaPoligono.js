var canvas = document.getElementById("gameArea");
var contexto = canvas.getContext("2d");

function dibujaPoligono(centro, radio, numeroLados, fill) {
  var x = radio * Math.cos(Math.PI / 180 * 0) + centro[0];
  var y = radio * Math.sin(Math.PI / 180 * 0) + centro[1];
  contexto.beginPath();
  contexto.lineJoin = "round";
  contexto.lineWidth = 1.5;
  contexto.moveTo(x, y);
  for (i = 1; i < 360; i += 360 / numeroLados) {
    x = radio * Math.cos(Math.PI / 180 * i) + centro[0];
    y = radio * Math.sin(Math.PI / 180 * i) + centro[1];
    contexto.lineTo(x, y);
    contexto.lineTo(centro[0], centro[1]);
    contexto.lineTo(x, y);
  }  
  contexto.closePath();
  if (fill) contexto.fill();
  contexto.stroke();
}

contexto.strokeStyle = "purple";
contexto.fillStyle = "green";
dibujaPoligono([100,110], 70, 5, 1);