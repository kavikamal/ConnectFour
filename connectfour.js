//Create the columns 
var mainGrid=document.getElementById("grid");
var colGrid;
var currentPlayer="b";
var target="";
document.getElementById('curPlay').textContent="Player 1's turn";
for(let i=0;i<7;i++){
    colGrid=document.createElement("div");
    colGrid.setAttribute("id",i);
    colGrid.setAttribute("class","colClass");
    colGrid.addEventListener('click', dropBall);
    mainGrid.appendChild(colGrid);
}

function dropBall(){
    document.getElementById('p4').textContent="";
    target =""+ this.id;
    let columnGrid = document.getElementById(target);
    var x = columnGrid.childElementCount;
    if (x<6){
       createBall(columnGrid);
    }
    else {
       document.getElementById('p4').textContent="This column is full.";
    }

}

function createBall(columnGrid){
    var dotElement=document.createElement("img");
    dotElement.setAttribute("class","imgClass");
    console.log(currentPlayer);
    if (currentPlayer=="b"){
        dotElement.setAttribute("src","black.png");
        dotElement.setAttribute("id",target.slice(-1).concat(columnGrid.childElementCount)+"b");
        columnGrid.appendChild(dotElement);
        if (checkWinner()){
            document.getElementById('p4').textContent="Player 1 is the winner";
        }
        currentPlayer="r";
        document.getElementById('curPlay').textContent="Player 2's turn";
    }else {
        dotElement.setAttribute("src","red.png");
        dotElement.setAttribute("id",target.slice(-1).concat(columnGrid.childElementCount)+"r");
        columnGrid.appendChild(dotElement);
        if (checkWinner()){
            document.getElementById('p4').textContent="Player 1 is the winner";
        }
        currentPlayer="b";
        document.getElementById('curPlay').textContent="Player 1's turn";
    }

}

function checkWinner(){
    
    for (let i=0;i<7;i++){
        //let columnGrid = document.getElementById("d"+i);
        //console.log(columnGrid);
        for(let j=0;j<6;j++){
            
        }
    }
    

    return false;
}
  