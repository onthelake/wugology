// New attempt, using SVG instead of HTML5 canvas.

var squares = document.querySelectorAll("svg rect")

var win = [[topLeft,topCenter,topRight],[midCenter,midLeft,midRight],[bottomRight,bottomLeft,bottomCenter],[topLeft,midLeft,bottomLeft],[topCenter,midCenter,bottomCenter],[topRight,midRight,bottomRight],[topLeft,midCenter,bottomRight],[topRight,midCenter,bottomLeft]]


function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }
    
    return false;
}



if (squares.length > 0){
    document.getElementById('gameboard').addEventListener('click',function(e) {
      //if e.target.id is in squares, then...
                                                          
            var sq = e.target.outerHTML;
            var xReg = /x=\"(\d+)\"/g
            var X = Number(xReg.exec(sq)[1]);
            var Xplus = X + 40
            var yReg = /y=\"(\d+)\"/g
            var Y = Number(yReg.exec(sq)[1]);
            var Yplus = Y + 40
            console.log(X,Y,Xplus,Yplus);
            var XXX = "<line x1=" + X + " y1=" + Y + " x2=" + Xplus + " y2=" + Yplus + " stroke='black'/> <line x1=" + X + " y1=" + Yplus + " x2=" + Xplus + " y2=" + Y + " stroke='black'/>";
                                                          console.log(sq);
                                                          console.log(XXX);
            e.parentNode.replaceChild(XXX, sq);

            // add e.target.id to list of X's squares
           // var squares = document.querySelectorAll("svg rect") //because this square is now an X, it is no longer a rect; this line removes this square from the available squares
           //                                               console.log(squares.length);
           //if (win is in Xsquares){
           // alert("You win!");
           // var r = confirm("Play again?");
           // if (r == true) {
           //    window.location.reload()
           //    } else {
           //      alert("You pressed Cancel!");
           //  }
           // }
                                                          
                                                          
            //wait two seconds
        
            //var placement = Math.floor(Math.random()*squares.length);
            //replace placement with O
            //add placement to list of O's squares
            // var squares = document.querySelectorAll("svg rect") //because this square is now an O, it is no longer a rect; this line removes this square from the available squares
        
            //wait half a second

            //if (win is in Osquares){
            // alert("You lose!");
            // var r = confirm("Play again?");
            // if (r == true) {
            //    window.location.reload()
            //    } else {
            //      alert("You pressed Cancel!");
            //  }
            // }
                                                          
            }, false);
}

















