function llenadoDirecto(event) {
    let contar = 1;
    var y1 = 0, y2 = 0;
    // alert("Entra");
    console.time('Tiempo');
    for (let index = 1; index <= 500; index++) {

        x1 = 1;
        x2 = 1000;
        y1 = y1 + 2;
        y2 = y2 + 2;

        var m = (y2 - y1) / (x2 - x1);
        var b = y1 - m * x1;
        //console.log("m = " + m, "b = " + b);

        rangox = Math.abs(x1 - x2);
        rangoy = Math.abs(y1 - y2);
        

        if (rangox > rangoy) {
            if (x1 > x2) {
                inicio = x2;
                fin = x1;
            } else {
                inicio = x1;
                fin = x2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "black";

            for (let i = inicio; i <= fin; i++) {
                var y = Math.round(m * i) + b;
                context.fillRect(i, y, 1, 1);
                //    console.log("X " + i + " " + "Y " + y);
            }
        } else {
            if (y1 > y2) {
                inicio = y2;
                fin = y1;
            } else {
                inicio = y1;
                fin = y2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "gray";

            for (let i = inicio; i <= fin; i++) {
                var x = Math.round(i - b) / m;
                context.fillRect(x, i, 1, 1);
                //  console.log("X " + i + " " + "Y " + x);
            }
        }
    }
    //ss
    x1 = 0;
    x2 = 0;
    y1 = 0;
    y2 = 0;
    for (let index = 1; index <= 1000; index++) {
        x1 = 0;
        x2 += 2;
        y1 += 2;
        y2 = 0;

        var m = (y2 - y1) / (x2 - x1);
        var b = y1 - m * x1;
        //console.log("m = " + m, "b = " + b);

        rangox = Math.abs(x1 - x2);
        rangoy = Math.abs(y1 - y2);
        //  console.log("rango x: " + rangox, "rango y: " + rangoy);

        if (contar == 1) {
            if (x1 > x2) {
                inicio = x2;
                fin = x1;
            } else {
                inicio = x1;
                fin = x2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "blue";

            for (let i = inicio; i <= fin; i++) {
                var y = Math.round(m * i) + b;
                context.fillRect(i, y, 1, 1);
                //      console.log("X " + i + " " + "Y " + y);
            }
            contar = 0;
        } else {
            if (y1 > y2) {
                inicio = y2;
                fin = y1;
            } else {
                inicio = y1;
                fin = y2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "purple";

            for (let i = inicio; i <= fin; i++) {
                var x = Math.round(i - b) / m;
                context.fillRect(x, i, 1, 1);
                //  console.log("X " + i + " " + "Y " + x);
            }
            contar = 1;
        }
    }
    //s2
    x1 = 1000;
    x2 = 1000;
    y1 = 0;
    y2 = 0;
    for (let index = 1; index <= 1000; index++) {
        // x1 = 1000;
        x2 -= 2;
        //y1 = 1000;
        y1 += 2;

        var m = (y2 - y1) / (x2 - x1);
        var b = y1 - m * x1;
        // console.log("m = " + m, "b = " + b);

        rangox = Math.abs(x1 - x2);
        rangoy = Math.abs(y1 - y2);
        

        if (contar == 1) {
            if (x1 > x2) {
                inicio = x2;
                fin = x1;
            } else {
                inicio = x1;
                fin = x2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "red";

            for (let i = inicio; i <= fin; i++) {
                var y = Math.round(m * i) + b;
                context.fillRect(i, y, 1, 1);
                //    console.log("X " + i + " " + "Y " + y);
            }
            contar = 0;
        } else {
            if (y1 > y2) {
                inicio = y2;
                fin = y1;
            } else {
                inicio = y1;
                fin = y2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "green";

            for (let i = inicio; i <= fin; i++) {
                var x = Math.round(i - b) / m;
                context.fillRect(x, i, 1, 1);
                //    console.log("X " + i + " " + "Y " + x);
            }
            contar = 1;
        }
    }
    //s2
    x1 = -2;
    x2 = 0;
    y1 = 0;
    y2 = 1000;
    for (let index = 1; index <= 500; index++) {
        x1 += 2;
        x2 += 2;
        // y1 = 0;
        // y2 = 1000;

        var m = (y2 - y1) / (x2 - x1);
        var b = y1 - m * x1;
        // console.log("m = " + m, "b = " + b);

        rangox = Math.abs(x1 - x2);
        rangoy = Math.abs(y1 - y2);
        // console.log("rango x: " + rangox, "rango y: " + rangoy);

        if (contar == 1) {
            if (x1 > x2) {
                inicio = x2;
                fin = x1;
            } else {
                inicio = x1;
                fin = x2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "yellow";

            for (let i = inicio; i <= fin; i++) {
                var y = Math.round(m * i) + b;
                context.fillRect(i, y, 1, 1);
                //  console.log("X " + i + " " + "Y " + y);
            }
            contar = 0;
        } else {
            if (y1 > y2) {
                inicio = y2;
                fin = y1;
            } else {
                inicio = y1;
                fin = y2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "magenta";

            for (let i = inicio; i <= fin; i++) {
                var x = Math.round(i - b) / m;
                context.fillRect(x, i, 1, 1);
                //  console.log("X " + i + " " + "Y " + x);
            }
            contar = 1;
        }
    }

    //s2abajomal
    x1 = 0;
    x2 = 1000;
    y1 = 0;
    y2 = 1000;
    for (let index = 1; index <= 0; index++) {
        /*  x2 = 0;
         x1 += 2;
         y2 += 2;
         y1 = 0; */
        // x1 = 1000;
        x1 -= 2;
        //y1 = 1000;
        y2 += 2;

        var m = (y2 - y1) / (x2 - x1);
        var b = y1 - m * x1;
        // console.log("m = " + m, "b = " + b);

        rangox = Math.abs(x1 - x2);
        rangoy = Math.abs(y1 - y2);
        // console.log("rango x: " + rangox, "rango y: " + rangoy);

        if (contar == 1) {
            if (x1 > x2) {
                inicio = x2;
                fin = x1;
            } else {
                inicio = x1;
                fin = x2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "red";

            for (let i = inicio; i <= fin; i++) {
                var y = Math.round(m * i) + b;
                context.fillRect(i, y, 1, 1);
                //    console.log("X " + i + " " + "Y " + y);
            }
            contar = 0;
        } else {
            if (y1 > y2) {
                inicio = y2;
                fin = y1;
            } else {
                inicio = y1;
                fin = y2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "gray";

            for (let i = inicio; i <= fin; i++) {
                var x = Math.round(i - b) / m;
                context.fillRect(x, i, 1, 1);
                //    console.log("X " + i + " " + "Y " + x);
            }
            contar = 1;
        }
    }

    //s2abajoizq
    x1 = 0;
    x2 = 1000;
    y2 = 0;
    y1 = 1000;
    for (let index = 1; index <= 0; index++) {
        x1 += 2;
        x2 = 0;
        y2 += 2;
        y1 = 0;

        var m = (y2 - y1) / (x2 - x1);
        var b = y1 - m * x1;
        // console.log("m = " + m, "b = " + b);

        rangox = Math.abs(x1 - x2);
        rangoy = Math.abs(y1 - y2);
        // console.log("rango x: " + rangox, "rango y: " + rangoy);

        if (contar == 1) {
            if (x1 > x2) {
                inicio = x2;
                fin = x1;
            } else {
                inicio = x1;
                fin = x2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "red";

            for (let i = inicio; i <= fin; i++) {
                var y = Math.round(m * i) + b;
                context.fillRect(i, y, 1, 1);
                //    console.log("X " + i + " " + "Y " + y);
            }
            contar = 0;
        } else {
            if (y1 > y2) {
                inicio = y2;
                fin = y1;
            } else {
                inicio = y1;
                fin = y2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "gray";

            for (let i = inicio; i <= fin; i++) {
                var x = Math.round(i - b) / m;
                context.fillRect(x, i, 1, 1);
                //    console.log("X " + i + " " + "Y " + x);
            }
            contar = 1;
        }
    }

    console.timeEnd('Tiempo');

}