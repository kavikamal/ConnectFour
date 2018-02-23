//Create the columns 
var mainGrid=document.getElementById("grid");
var colGrid;
var currentPlayer="b";
var target="";
var filledCells=0;
var dots=[
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0]
        ]
document.getElementById('curPlay').textContent="Player 1's turn";
for(let i=0;i<7;i++){
    colGrid=document.createElement("div");
    colGrid.setAttribute("id",i);
    colGrid.setAttribute("class","colClass");
    colGrid.addEventListener('click', dropBall);
    mainGrid.appendChild(colGrid);
}

function startNewGame(){
    location.reload();
}
function dropBall(){
    document.getElementById('p4').textContent="";
    target =""+ this.id;
    let columnGrid = document.getElementById(target);
    var x = columnGrid.childElementCount;
    if (x<6){
       filledCells+=1; 
       createBall(columnGrid);
    }
    else {
       console.log(filledCells);
       if (filledCells==42)
            document.getElementById('p4').textContent="Game is draw";
       else     
            document.getElementById('p4').textContent="This column is full.";
    }
}

function createBall(columnGrid){
    var dotElement=document.createElement("img");
    dotElement.setAttribute("class","imgClass");
    var i=parseInt(target.slice(-1));
    var j=columnGrid.childElementCount;
    var colRow=target.slice(-1).concat(columnGrid.childElementCount);
    if (currentPlayer=="b"){
        dotElement.setAttribute("src","black.png");
        dots[i][j]=1;
        colRow= "b"+colRow;
        dotElement.setAttribute("id",colRow);
        columnGrid.appendChild(dotElement);
        if (checkWinner(colRow)){
            document.getElementById('p4').textContent="Player 1 is the winner";
            document.getElementById('curPlay').textContent="Play Again? ";
        }else{
            currentPlayer="r";
            document.getElementById('curPlay').textContent="Player 2's turn";
        }
    }else {
        dotElement.setAttribute("src","red.png");
        colRow= "r"+colRow;
        dots[i][j]=2;
        dotElement.setAttribute("id",colRow);
        columnGrid.appendChild(dotElement);
        if (checkWinner(colRow)){
            document.getElementById('p4').textContent="Player 2 is the winner";
            document.getElementById('curPlay').textContent="Play Again? ";
        }
        else{
            currentPlayer="b";
            document.getElementById('curPlay').textContent="Player 1's turn";
        }
    }
}

function checkWinner(colRow){
    
    var col= colRow.charAt(1);
    var row= colRow.charAt(2); 
    var win=4,  r=0, c=0, dr=0, dl=0;
    var color=0; 
    colRow.charAt(0)==='b' ? color=1:color=2;

    for(var i=0;i<7;i++){
        for(var j=0;j<7;j++){
            (dots[j][i]===color) ? c++ : c=0;
            (dots[i][j]===color) ? r++ : r=0;
            if(dots[i][j]===color && i<7-win+1){ dr=0; dl=0;
                for(var z=0;z<win;z++){ 
                    (dots[i+z][j+z]===color) ? dr++ : dr=0;
                    (dots[i+z][j-z]===color) ? dl++ : dl=0;
                }
            }
            if(c===win || r===win || dr===win || dl===win){ 
                mainGrid.setAttribute("class","disableDiv");
                var startGameBtn= document.getElementById("startGame");
                startGameBtn.setAttribute("class","yesDisplay");
                return true;
    }
        } r=0;
    }
    return false;
}

    
   
  