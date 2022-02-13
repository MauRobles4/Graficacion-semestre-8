function llenadoDDA(event) {
    //console.log("HOLA");
    let aux1 = 0, aux2 = 0, auxy1 = 0, auxy2 = 0;
    let conta = 0;
    x1 = 0;
    y1 = 0;
    x2 = 0;
    y2 = 0;
    console.time('Tiempo');
    for (let index = 1; index <= 100; index++) {

        x1 = 1;
        x2 = 1000;
        y1 = y1 + 2;
        y2 = y2 + 2;

        if (conta == 0) {
            aux1 = x1;
            aux2 = x2;
            auxy1 = y1;
            auxy2 = y2;
            x1 = aux2;
            x2 = aux1;
            y1 = auxy2;
            y2 = auxy1;
            conta = 1;
        } else {
            conta = 0;
        }
        var lienzo = document.querySelector("canvas");
        var context = lienzo.getContext("2d");
        //  context.fillStyle = "black";
        if (conta == 1) {
            context.fillStyle = "gray";
        } else {
            context.fillStyle = "black";
        }

        if (Math.abs(x2 - x1) >= Math.abs(y2 - y1)) {
            aux = Math.abs(x2 - x1);
            //console.log("Aux = " + aux);
        }
        else {
            aux = Math.abs(y2 - y1);
            //console.log("Aux = " + aux);
        }
        //console.log("*************************************");

        Dx = (x2 - x1) / aux;
        Dy = (y2 - y1) / aux;
        /*console.log("Dx = " + Dx);
        console.log("Dy = " + Dy);
        console.log("*************************************");*/

        X = x1;
        Y = y1;



        let i = 0;
        while (i <= aux) {
            grayondeoX = Math.round(X);
            grayondeoY = Math.round(Y);
            //console.log("grayX = " + grayondeoX);
            //console.log("grayY = " + grayondeoY);

            context.fillRect(grayondeoX, grayondeoY, 1, 1);
            //console.log("X = " + X);
            //console.log("Y = " + Y);

            X = X + Dx;
            Y = Y + Dy;
            i++;
        }
        if (conta == 1) {
            x1 = aux1;
            x2 = aux2;
            y1 = auxy1;
            y2 = auxy2;
        }
    }
    //jj
    x1 = 0;
    y1 = 0;
    x2 = 0;
    y2 = 0;

    for (let index = 1; index <= 100; index++) {

        x1 = 0;
        x2 += 2;
        y1 += 2;
        y2 = 0;
        if (conta == 0) {
            aux1 = x1;
            aux2 = x2;
            auxy1 = y1;
            auxy2 = y2;
            x1 = aux2;
            x2 = aux1;
            y1 = auxy2;
            y2 = auxy1;
            conta = 1;
        } else {
            conta = 0;
        }
        var lienzo = document.querySelector("canvas");
        var context = lienzo.getContext("2d");
        //  context.fillStyle = "black";
        if (conta == 1) {
            context.fillStyle = "gray";
        } else {
            context.fillStyle = "black";
        }
        if (Math.abs(x2 - x1) >= Math.abs(y2 - y1)) {
            aux = Math.abs(x2 - x1);
            //console.log("Aux = " + aux);
        }
        else {
            aux = Math.abs(y2 - y1);
            //console.log("Aux = " + aux);
        }
        //console.log("*************************************");

        Dx = (x2 - x1) / aux;
        Dy = (y2 - y1) / aux;
        /*console.log("Dx = " + Dx);
        console.log("Dy = " + Dy);
        console.log("*************************************");*/

        X = x1;
        Y = y1;



        let i = 0;
        while (i <= aux) {
            grayondeoX = Math.round(X);
            grayondeoY = Math.round(Y);
            //console.log("grayX = " + grayondeoX);
            //console.log("grayY = " + grayondeoY);

            context.fillRect(grayondeoX, grayondeoY, 1, 1);
            //console.log("X = " + X);
            //console.log("Y = " + Y);

            X = X + Dx;
            Y = Y + Dy;
            i++;
        }
        if (conta == 1) {
            x1 = aux1;
            x2 = aux2;
            y1 = auxy1;
            y2 = auxy2;
        }
    }
    x1 = 1000;
    x2 = 1000;
    y1 = 0;
    y2 = 0;

    for (let index = 1; index <= 100; index++) {

        // x1 = 1000;
        x2 -= 2;
        //y1 = 1000;
        y1 += 2;
        if (conta == 0) {
            aux1 = x1;
            aux2 = x2;
            auxy1 = y1;
            auxy2 = y2;
            x1 = aux2;
            x2 = aux1;
            y1 = auxy2;
            y2 = auxy1;
            conta = 1;
        } else {
            conta = 0;
        }
        var lienzo = document.querySelector("canvas");
        var context = lienzo.getContext("2d");
        //  context.fillStyle = "black";
        if (conta == 1) {
            context.fillStyle = "gray";
        } else {
            context.fillStyle = "black";
        }
        if (Math.abs(x2 - x1) >= Math.abs(y2 - y1)) {
            aux = Math.abs(x2 - x1);
            //console.log("Aux = " + aux);
        }
        else {
            aux = Math.abs(y2 - y1);
            //console.log("Aux = " + aux);
        }
        //console.log("*************************************");

        Dx = (x2 - x1) / aux;
        Dy = (y2 - y1) / aux;
        /*console.log("Dx = " + Dx);
        console.log("Dy = " + Dy);
        console.log("*************************************");*/

        X = x1;
        Y = y1;



        let i = 0;
        while (i <= aux) {
            grayondeoX = Math.round(X);
            grayondeoY = Math.round(Y);
            //console.log("grayX = " + grayondeoX);
            //console.log("grayY = " + grayondeoY);

            context.fillRect(grayondeoX, grayondeoY, 1, 1);
            //console.log("X = " + X);
            //console.log("Y = " + Y);

            X = X + Dx;
            Y = Y + Dy;
            i++;
        }
        if (conta == 1) {
            x1 = aux1;
            x2 = aux2;
            y1 = auxy1;
            y2 = auxy2;
        }
    }
    x1 = 0;
    y1 = 0;
    x2 = 0;
    y2 = 1000;

    for (let index = 1; index <= 100; index++) {

        x2 += 2;
        x1 += 2;
        if (conta == 0) {
            aux1 = x1;
            aux2 = x2;
            auxy1 = y1;
            auxy2 = y2;
            x1 = aux2;
            x2 = aux1;
            y1 = auxy2;
            y2 = auxy1;
            conta = 1;
        } else {
            conta = 0;
        }
        var lienzo = document.querySelector("canvas");
        var context = lienzo.getContext("2d");
        //  context.fillStyle = "black";
        if (conta == 1) {
            context.fillStyle = "gray";
        } else {
            context.fillStyle = "black";
        }
        if (Math.abs(x2 - x1) >= Math.abs(y2 - y1)) {
            aux = Math.abs(x2 - x1);
            //console.log("Aux = " + aux);
        }
        else {
            aux = Math.abs(y2 - y1);
            //console.log("Aux = " + aux);
        }
        //console.log("*************************************");

        Dx = (x2 - x1) / aux;
        Dy = (y2 - y1) / aux;
        /*console.log("Dx = " + Dx);
        console.log("Dy = " + Dy);
        console.log("*************************************");*/

        X = x1;
        Y = y1;

        let i = 0;
        while (i <= aux) {
            grayondeoX = Math.round(X);
            grayondeoY = Math.round(Y);
            //console.log("grayX = " + grayondeoX);
            //console.log("grayY = " + grayondeoY);

            context.fillRect(grayondeoX, grayondeoY, 1, 1);
            //console.log("X = " + X);
            //console.log("Y = " + Y);

            X = X + Dx;
            Y = Y + Dy;
            i++;
        }
        if (conta == 1) {
            x1 = aux1;
            x2 = aux2;
            y1 = auxy1;
            y2 = auxy2;
        }
    }
    console.timeEnd('Tiempo');

}