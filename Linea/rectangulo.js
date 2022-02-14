function rectangulo(x1, y1, x2, y2) {

    // alert("Entra rectangulo");
    
      var coor = "X: " + x1 + ", Y: " + y1;
  
      console.log(coor);
  
      var coor2 = "X2: " + x2 + ", Y2: " + y2;
  
      console.log(coor2);
          auxB1 = x1;
          auxB2 = x2;
          auyB1 = y1;
          auyB2 = y2;
  
      for (let index = 0; index < 4; index++) {
          //console.log("Hola" + contadorB);
  
          if (index == 0) {
            x1 = auxB1;
            x2 = auxB1;
            y1 = auyB1;
            y2 = auyB2;
          }else if (index == 1) {
            x1 = auxB1;
            x2 = auxB2;
            y1 = auyB2;
            y2 = auyB2;
          }else if (index == 2) {
            x1 = auxB2;
            x2 = auxB2;
            y1 = auyB2;
            y2 = auyB1;
          }else if (index == 3) {
            x1 = auxB2
            x2 = auxB1;
            y1 = auyB1;
            y2 = auyB1;
          }
  
          var Dx = x2 - x1;
          var Dy = y2 - y1;
  
          var inc_x = Dx >= 0 ? +1 : -1;
          var inc_y = Dy >= 0 ? +1 : -1;
  
          Dx = Dx < 0 ? -Dx : Dx;
          Dy = Dy < 0 ? -Dy : Dy;
  
          var lienzo = document.querySelector("canvas");
          var context = lienzo.getContext("2d");
          context.fillStyle = "gray";
  
          if (Dx >= Dy) {
            var d = 2 * Dy - Dx;
            var delta_A = 2 * Dy;
            var delta_B = 2 * Dy - 2 * Dx;
  
            var x = 0;
            var y = 0;
            for (i = 0; i <= Dx; i++) {
              context.fillRect(x + x1, y + y1, 2, 2);
              if (d > 0) {
                d += delta_B;
                x += inc_x;
                y += inc_y;
  
              } else {
                d += delta_A;
                x += inc_x;
              }
  
            }
          } else {
            var d = 2 * Dx - Dy;
            var delta_A = 2 * Dx;
            var delta_B = 2 * Dx - 2 * Dy;
  
            var x = 0;
            var y = 0;
  
            for (i = 0; i <= Dy; i++) {
              context.fillRect(x + x1, y + y1, 2, 2);
              if (d > 0) {
                d += delta_B;
                x += inc_x;
                y += inc_y;
              } else {
                d += delta_A;
                y += inc_y;
              }
  
            }
          }
      }
      contadorB = 0;
    
}