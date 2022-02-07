// var clicks = 0;
// var x2 = +x2, x2 = +x2, y2 = +y2, y2 = +y2;
// var aux = 0.0;
// function bresenham(event) {
//     // var inicio=0;
//     clicks = clicks + 1;
//     var lienzo = document.getElementById("canvas").getContext("2d");
//     // alert(clicks);
//     if (clicks == 1) {

//         x2 = event.clientX;
//         y2 = event.clientY;
//         // x2=1;
//         // y2=2;
//         var coor = "X: " + x2 + ", Y: " + y2;
//         // clicks = clicks + 1;
//         document.getElementById("demo").innerHTML = coor;

//     } else if (clicks == 2) {
//         // alert("Entra al 2do click");
//         x2 = event.clientX;
//         y2 = event.clientY;
//         // x2=4;
//         // y2=4;
//         var coor = "X: " + x2 + ", Y: " + y2;
//         // clicks = clicks + 1;
//         document.getElementById("demo").innerHTML = coor;
//     } else {
//         // alert(clicks);
//         alert("Solo se necesitan dos coordenadas");
//     }

//     // alert(x2 + " " + y2 + " " + x2 + " " + y2);
//     // CANVAS
//     // var lienzo =  document.getElementById("canvas");
//     // var x2 = 1, x2 = 30, y2 = 2, y2 = 40;

//     var m = (y2 - y2) / (x2 - x2);
//     var dify = Math.abs(y2 - y2);
//     var difx = Math.abs(x2 - x2);
//     var dif2x = 2 * difx;
//     var dif2y = 2 * dify;
//     var pk0 = dif2y - difx;
//     xi = x2;
//     yi = y2;

//     // alert("Este es el valor de m= "+ m);
//     // var b = y2 - (m * x2);
//     // var context = lienzo.getContext("2d");
//     lienzo.fillStyle = "gray";
//     // context.fillStyle = "gray";
//     // var y = 0;
//     // var x = 0;
//     // alert(x2+ " "+ x2+" "+ y2+" " +y2);

//     if (difx > dify) {
//         aux = y2 + m;
//         if (x2 < x2) {
//             for (var i = 0; i <= difx; i++) {
//                 // x2++;
//                 // if (xi!=xf) {
//                 // var y = Math.round(Number(i + m))
//                 if (pk0 >= 0) {
//                     var pk = pk0 + dif2y - dif2x;
//                     pk0 = pk;
//                     xi = xi + 1;
//                     yi = yi + 1;
//                     lienzo.fillRect(xi - 4, yi - 50, 4, 4);
//                 } else {
//                     var pk = pk0 + dif2y;
//                     pk0 = pk;
//                     xi = xi + 1;
//                     lienzo.fillRect(xi - 4, yi - 50, 4, 4);

//                 }
//                 // alert("Suma=" +aux + " y="+ y );
//                 aux = aux + m;

//                 // }
//                 // context.fillRect(i - 10, y - 10, 4, 4);

//             }
//         } else {

//             for (var i = difx; i <= 0; i--) {
//                 // x2++;
//                 // if (xi!=xf) {
//                 if (pk0 >= 0) {
//                     var pk = pk0 + dif2y - dif2x;
//                     pk0 = pk;
//                     xi = xi + 1;
//                     yi = yi + 1;
//                     lienzo.fillRect(xi - 4, yi - 50, 4, 4);
//                 } else {
//                     var pk = pk0 + dif2y;
//                     pk0 = pk;
//                     xi = xi + 1;
//                     lienzo.fillRect(xi - 4, yi - 50, 4, 4);

//                 }
//                 // var y = Math.round(aux);
//                 // alert("Suma=" +aux + " y="+ y );
//                 // aux = aux + m;
//                 // lienzo.fillRect(y - 4, i - 50, 4, 4);

//                 // }
//                 // var x = Math.round(Number(m * i + b))
//                 // lienzo.fillRect(x-4, i-50, 4, 4);
//             }
//         }


//     } else if (difx < dify) {
//         aux = x2 + m;
//         if (y2 < y2) {

//             for (var i = 0; i <= dif2y; i++) {
//                 // x2++;
//                 // if (xi!=xf) {
//                 if (pk0 >= 0) {
//                     var pk = pk0 + dif2y - dif2x;
//                     pk0 = pk;
//                     xi = xi + 1;
//                     yi = yi + 1;
//                     lienzo.fillRect(xi - 4, yi - 50, 4, 4);
//                 } else {
//                     var pk = pk0 + dif2y;
//                     pk0 = pk;
//                     yi = yi + 1;
//                     lienzo.fillRect(xi - 4, yi - 50, 4, 4);

//                 }
//                 // var x = Math.round(aux);
//                 // alert("Suma=" +aux + " y="+ y );
//                 // aux = aux + m;
//                 // lienzo.fillRect(x - 4, i - 50, 4, 4);

//                 // }
//                 // var x = Math.round(Number((i - b) / m))
//                 // lienzo.fillRect(x-4, i-50, 4, 4);
//             }
//         } else {
//             for (var i = dify; i <= 0; i--) {
//                 // var x = Math.round(aux);
//                 // alert("Suma=" +aux + " y="+ y );
//                 if (pk0 >= 0) {
//                     var pk = pk0 + dif2y - dif2x;
//                     pk0 = pk;
//                     xi = xi + 1;
//                     yi = yi + 1;
//                     lienzo.fillRect(xi - 4, yi - 50, 4, 4);
//                 } else {
//                     var pk = pk0 + dif2y;
//                     pk0 = pk;
//                     yi = yi + 1;
//                     lienzo.fillRect(xi - 4, yi - 50, 4, 4);

//                 }
//                 // aux = aux + m;
//                 // lienzo.fillRect(x - 4, i - 50, 4, 4);
//                 // var x = Math.round(Number((i - b) / m))
//                 // lienzo.fillRect(x-4, i-50, 4, 4);
//             }
//         }

//     }
//     else {
//         for (var i = x2; i <= x2; i++) {
//             var y = Math.round(Number(m * i + b))
//             lienzo.fillRect(i - 4, y - 50, 4, 4);
//         }

//     }

// }
function bresenham(x1, y1, x2, y2, lienzo){ 
    var dx = Math.abs(x2 - x1);
    var dy = Math.abs(y2 - y1);

    var sx = (x1 < x2) ? 1 : -1;
    var sy = (y1 < y2) ? 1 : -1;

    var err = dx-dy;
    
    while(x1!=x2 || y1!=y2){
        // pintarPixel(contexto, x1, y1, color);
        lienzo.fillRect(x1, y1, 4, 4);

        var e2 = 2*err;
        if(e2>-dy){
            err -= dy; 
            x1 += sx;
        }
        if(e2<dx){
            err += dx; 
            y1 += sy;
        }
    }      
}