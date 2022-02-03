function dibujarLinea(x0, y0, x1, y1) {

	var linea = document.getElementById("canvas").getContext("2d");

	x0 = +x0;
	y0 = +y0;
	x1 = +x1;
	y1 = +y1;

	if ((x1 - x0 == 0)) {
		console.log("X | Y");
		for (var i = y0; i <= y1; i++) {
			var y = i
			console.log(x0 + "  " + y)
			drawCoordinates(Number(x0), y)
		}
		console.log("solo un punto")
	}else {

		var m = Number((y1 - y0) / (x1 - x0));
		
		var b = Number(y0 - ((m) * (x0)));
		var difx = Math.abs(x1 - x0);
		var dify = Math.abs(y1 - y0);
		console.log("difx ="+difx);
		console.log("dify ="+dify);
		console.log("m = " + m);
		console.log("b = " + b);

		if (difx > dify) {
			if (x0<x1){
				console.log("X | Y")
				for (var i = x0; i <= x1; i++) {
					var y = Math.round(Number(m * i + b))
					console.log(i + ' | ' + y)
					drawCoordinates(i, y)
				}
			}else{
				console.log("X | Y")
				for (var i = x1; i <= x0; i++) {
					var x = Math.round(Number(m * i + b))
					console.log(x + ' | ' + i)
					drawCoordinates(x, i)
				}
			}
			
			console.log("difx es mayor a dify")
		} else if (difx < dify) {
			if (y0<y1){
				console.log("X | Y")
				for (var i = y0; i <= y1; i++) {
					var x = Math.round(Number((i - b) / m))
					console.log(x + ' | ' + i)
					drawCoordinates(x, i)
				}
			}else{
				console.log("X | Y")
				for (var i = y1; i <= y0; i++) {
					var x = Math.round(Number((i - b) / m))
					console.log(x + ' | ' + i)
					drawCoordinates(x, i)
				}
			}
			
			console.log("dify es mayor a difx")
		}
	}
	document.getElementById('x0').focus();

	function drawCoordinates(x0, y0) {
		linea.fillStyle = "#48cf2f";
		linea.fillRect((x0) + 100, 100 - (y0), 3, 3);
		linea.stroke();
	}

}