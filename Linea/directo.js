function directo(x1, y1, x2, y2, lienzo) {
    var m = (y2 - y1) / (x2 - x1);
    var b = y1 - (m * x1);
    var dx = Math.abs(x1 - x2);
    var dy = Math.abs(y1 - y2);

    if (dx == 0) {
        if (y1 < y2) {
            for (var y = y1; y <= y2; y++) {
                
                lienzo.fillRect(x1, y, 4, 4);
                // lienzo.strokeRect(x1,y,4,4);
            }
        } else {
            for (var y = y2; y <= y1; y++) {
                
                // lienzo.fillRect(x1, y, 4, 4);
                // lienzo.strokeRect(x1,y,4,4);
            }
        }
    } else {
        if (dy > dx) {
            if (y1 < y2) {
                for (var y = y1; y <= y2; y++) {
                    var x = (y - b) / m;
                    
                    lienzo.fillRect(Math.round(x), y, 4, 4);
                }
            } else {
                for (var y = y2; y <= y1; y++) {
                    var x = (y - b) / m;
                    
                    lienzo.fillRect(Math.round(x), y, 4, 4);

                }
            }
        } else {
            if (x1 < x2) {
                for (var x = x1; x <= x2; x++) {
                    var y = (m * x) + b;
                    
                    lienzo.fillRect(Math.round(x), y, 4, 4);
                }
            } else {
                for (var x = x2; x <= x1; x++) {
                    var y = (m * x) + b;
                    
                    lienzo.fillRect(Math.round(x), y, 4, 4);
                }
            }
        }
    }
}