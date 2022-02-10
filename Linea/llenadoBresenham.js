function llenadoBresenham(x1, y1, x2, y2, lienzo){ 
    var dx = Math.abs(x2 - x1);
    var dy = Math.abs(y2 - y1);

    var sx = (x1 < x2) ? 1 : -1;
    var sy = (y1 < y2) ? 1 : -1;

    var err = dx-dy;
    
    while(x1!=x2 || y1!=y2){
        
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