function llenadoDirecto(x1, y1, x2, y2, lienzo) {
    var m = (y2 - y1) / (x2 - x1);
    var b = y1 - (m * x1);
    var dx = Math.abs(x1 - x2);
    var dy = Math.abs(y1 - y2);
    // alert(x1);

    // ARRIBA A ABAJO
    for (var x = 0; x <= 1000; x += 4) {
        // console.log(x);
        for (var y = 0; y <= 1000; y++) {
            // alert("X=" +x + " ,Y=" +y);
            // var x = (y - b) / m;
            var y2 = (y - b) / m;
            // var y2 = (m * x) + b;
            lienzo.fillRect(x, y2, 1, 1);


        }

    }

    // ABAJO A ARRIBA
    for (var x = 2; x <= 1000; x += 4) {
        // console.log(x);
        for (var y = 1000; y <= 0; y--) {
            // alert("X=" +x + " ,Y=" +y);
            var y2 = (y - b) / m;
            lienzo.fillRect(x, y2, 1, 1);


        }

    }
    // IZQUIERDA A DERECHA
    for (var y = 0; y <= 1000; y += 4) {
        // console.log(y);
        for (var x = 0; x <= 1000; x++) {
            // alert("X=" +x + " ,Y=" +y);
            // var x2 = (y - b) / m;
            var x2 = (m * x) + b;
            lienzo.fillRect(x2, y, 1, 1);
            // lienzo.fillRect(x, y, 1, 1);


        }

    }
    // DERECHA A IZQUIERDA
    for (var y = 2; y <= 1000; y += 4) {
        // console.log(y);
        for (var x = 1000; x <= 0; x--) {
            // alert("X=" +x + " ,Y=" +y);
            // var x2 = (y - b) / m;
            var x2 = (m * x) + b;
            lienzo.fillRect(x2, y, 1, 1);
            // lienzo.fillRect(x, y, 1, 1);


        }

    }

}