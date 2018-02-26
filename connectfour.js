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
    if (filledCells<42){
      if (x==6)
        document.getElementById('p4').textContent="This column is full.";
      else  
       createBall(columnGrid);
    }
    else {
            document.getElementById('p4').textContent="Game is draw";
            mainGrid.setAttribute("class","disableDiv");
            var startGameBtn= document.getElementById("startGame");
            startGameBtn.setAttribute("class","yesDisplay");
            document.getElementById('curPlay').textContent="Play Again? ";
    }
}

function createBall(columnGrid){
    var dotElement=document.createElement("img");
    dotElement.setAttribute("class","imgClass");
    var i=-1;
    if (columnGrid.childElementCount<6)
       var i= 5 - columnGrid.childElementCount;
    var j=parseInt(target.slice(-1));
    console.log(i,j); 
    if (i>-1) {
        filledCells+=1; 
    if (currentPlayer=="b"){
        
        dotElement.setAttribute("src","black.png");
        dots[i][j]=1;
        columnGrid.appendChild(dotElement);
        if (checkWinner(dots)){
            mainGrid.setAttribute("class","disableDiv");
            var startGameBtn= document.getElementById("startGame");
            startGameBtn.setAttribute("class","yesDisplay");
            document.getElementById('p4').textContent="Player 1 is the winner";
            document.getElementById('curPlay').textContent="Play Again? ";
        }else{
            currentPlayer="r";
            document.getElementById('curPlay').textContent="Player 2's turn";
        }
    }else {
        dotElement.setAttribute("src","red.png");
        dots[i][j]=2;
        columnGrid.appendChild(dotElement);
        if (checkWinner(dots)){
            mainGrid.setAttribute("class","disableDiv");
            var startGameBtn= document.getElementById("startGame");
            startGameBtn.setAttribute("class","yesDisplay");
            document.getElementById('p4').textContent="Player 2 is the winner";
            document.getElementById('curPlay').textContent="Play Again? ";
        }
        else{
            currentPlayer="b";
            document.getElementById('curPlay').textContent="Player 1's turn";
        }
    }
    }
}

function checkkFourCells(a,b,c,d) {
    // Check first cell non-zero and all cells match
    return ((a != 0) && (a ==b) && (a == c) && (a == d));
}

function checkWinner(grid) {
    // Check down
    for (r = 0; r < 3; r++)
        for (c = 0; c < 7; c++)
            if (checkkFourCells(grid[r][c], grid[r+1][c], grid[r+2][c], grid[r+3][c]))
                return true;

    // Check right
    for (r = 0; r < 6; r++)
        for (c = 0; c < 4; c++)
            if (checkkFourCells(grid[r][c], grid[r][c+1], grid[r][c+2], grid[r][c+3]))
                return true;

    // Check down-right
    for (r = 0; r < 3; r++)
        for (c = 0; c < 4; c++)
            if (checkkFourCells(grid[r][c], grid[r+1][c+1], grid[r+2][c+2], grid[r+3][c+3]))
                 return true;


    // Check down-left
    for (r = 3; r < 6; r++)
        for (c = 0; c < 4; c++)
            if (checkkFourCells(grid[r][c], grid[r-1][c+1], grid[r-2][c+2], grid[r-3][c+3]))
                return true;
    return false;
}


   
  