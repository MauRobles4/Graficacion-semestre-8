function dda(x1, y1, x2, y2, lienzo){ 
    var dx = Math.abs(x1 - x2);
    var dy = Math.abs(y1 - y2);
    var antx, anty;

    if(dy>dx){
        var m = (x2-x1)/(y2-y1);
        if(y1<y2){
            antx = x1;
            var x = x1;
            for (var y=y1; y<=y2; y++){
                
                lienzo.fillRect(Math.round(x), y, 4, 4);
                x = antx + m;
                antx = x;
            }
        }else{
            antx = x2;
            var x = x2;
            for (var y=y2; y<=y1; y++){
                
                lienzo.fillRect(Math.round(x), y, 4, 4);
                x = antx + m;
                antx = x;
            }
        }
    }else{
        var m = (y2-y1)/(x2-x1);
        if(x1<x2){
            anty = y1;
            var y = y1;
            for (var x=x1; x<=x2; x++){
                
                lienzo.fillRect(x,Math.round(y), 4, 4);
                y = anty + m;
                anty = y;
            }
        }else{
            anty = y2;
            var y = y2;
            for (var x=x2; x<=x1; x++){
                
                lienzo.fillRect(x,Math.round(y), 4, 4);
                y = anty + m;
                anty = y;
            }
        }
    }       
}