var clicks = 0;
var x1 = +x1, x2 = +x2, y1 = +y1, y2 = +y2, xf = +xf, xi = +xi;
var aux = 0.0;
function dda(event) {
    // var inicio=0;
    clicks = clicks + 1;
    var lienzo = document.getElementById("canvas").getContext("2d");
    // alert(clicks);
    if (clicks == 1) {

        x1 = event.clientX;
        y1 = event.clientY;
        // x1=1;
        // y1=2;
        var coor = "X: " + x1 + ", Y: " + y1;
        // clicks = clicks + 1;
        document.getElementById("demo").innerHTML = coor;

    } else if (clicks == 2) {
        // alert("Entra al 2do click");
        x2 = event.clientX;
        y2 = event.clientY;
        // x2=4;
        // y2=4;
        var coor = "X: " + x2 + ", Y: " + y2;
        // clicks = clicks + 1;
        document.getElementById("demo").innerHTML = coor;
    } else {
        // alert(clicks);
        alert("Solo se necesitan dos coordenadas");
    }

    // alert(x1 + " " + y1 + " " + x2 + " " + y2);
    // CANVAS
    // var lienzo =  document.getElementById("canvas");
    // var x1 = 1, x2 = 30, y1 = 2, y2 = 40;

    var m = (y2 - y1) / (x2 - x1);
    var dify = Math.abs(y2 - y1);
    var difx = Math.abs(x2 - x1);
    xi = x1;
    xf = x2;
    // alert("Este es el valor de m= "+ m);
    // var b = y1 - (m * x1);
    // var context = lienzo.getContext("2d");
    lienzo.fillStyle = "gray";
    // context.fillStyle = "gray";
    // var y = 0;
    // var x = 0;
    // alert(x1+ " "+ x2+" "+ y1+" " +y2);

    if (difx > dify) {
        aux = y1 + m;
        if (x1 < x2) {
            for (var i = x1; i <= x2; i++) {
                // x1++;
                // if (xi!=xf) {
                // var y = Math.round(Number(i + m))
                var y = Math.round(aux);
                // alert("Suma=" +aux + " y="+ y );
                aux = aux + m;
                lienzo.fillRect(i - 4, y - 50, 4, 4);

                // }
                // context.fillRect(i - 10, y - 10, 4, 4);

            }
        } else {

            for (var i = x2; i <= x1; i++) {
                // x1++;
                // if (xi!=xf) {
                // var y = Math.round(Number(i + m))
                var y = Math.round(aux);
                // alert("Suma=" +aux + " y="+ y );
                aux = aux + m;
                lienzo.fillRect(y - 4, i - 50, 4, 4);

                // }
                // var x = Math.round(Number(m * i + b))
                // lienzo.fillRect(x-4, i-50, 4, 4);
            }
        }


    } else if (difx < dify) {
        aux = x1 + m;
        if (y1 < y2) {

            for (var i = y1; i <= y2; i++) {
                // x1++;
                // if (xi!=xf) {
                // var y = Math.round(Number(i + m))
                var x = Math.round(aux);
                // alert("Suma=" +aux + " y="+ y );
                aux = aux + m;
                lienzo.fillRect(x - 4, i - 50, 4, 4);

                // }
                // var x = Math.round(Number((i - b) / m))
                // lienzo.fillRect(x-4, i-50, 4, 4);
            }
        } else {
            for (var i = y2; i <= y1; i++) {
                var x = Math.round(aux);
                // alert("Suma=" +aux + " y="+ y );
                aux = aux + m;
                lienzo.fillRect(x - 4, i - 50, 4, 4);
                // var x = Math.round(Number((i - b) / m))
                // lienzo.fillRect(x-4, i-50, 4, 4);
            }
        }

    }
    else {
        for (var i = x1; i <= x2; i++) {
            var y = Math.round(Number(m * i + b))
            lienzo.fillRect(i - 4, y - 50, 4, 4);
        }

    }

}
