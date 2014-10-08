// New attempt, using img instead of svg

var squares = ["topRight","topCenter","topLeft","midRight","midCenter","midLeft","bottomRight","bottomCenter","bottomLeft"];

var win = [["topLeft","topCenter","topRight"],["midCenter","midLeft","midRight"],["bottomRight","bottomLeft","bottomCenter"],["topLeft","midLeft","bottomLeft"],["topCenter","midCenter","bottomCenter"],["topRight","midRight","bottomRight"],["topLeft","midCenter","bottomRight"],["topRight","midCenter","bottomLeft"]]

var XXX = [];
var OOO = [];

if (squares.length > 0){
    document.getElementById('board').addEventListener('click',function(e) {
        var index = squares.indexOf(e.target.id);
            if (index > -1) {
            document.getElementById(e.target.id).src = "X.svg";
            XXX.push(e.target.id);
            console.log("X's choice:", e.target.id);
            squares.splice(index, 1);
            console.log("blank squares:", squares);
           //if (win is in XXX){
           // alert("You win!");
           // var r = confirm("Play again?");
           // if (r == true) {
           //    window.location.reload()
           //    } else {
           //      alert("You pressed Cancel!");
           //  }
           // }
          var placement = Math.floor(Math.random()*squares.length);
          console.log(placement);
          setTimeout(function () {
            document.getElementById(squares[placement]).src = "O.svg";
            OOO.push(squares[placement]);
            squares.splice(placement,1);
            }, 100);
          console.log("O's choice:", squares[placement]);
          console.log("blank squares:", squares);

            //if (win is in OOO){
            // alert("You lose!");
            // var r = confirm("Play again?");
            // if (r == true) {
            //    window.location.reload()
            //    } else {
            //      alert("You pressed Cancel!");
            //  }
            
            }
            }, false);
}

















