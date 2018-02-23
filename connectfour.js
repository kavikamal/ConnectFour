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
    var colRow=target.slice(-1).concat(columnGrid.childElementCount);
    if (currentPlayer=="b"){
        dotElement.setAttribute("src","black.png");
        colRow= "i"+colRow;
        dotElement.setAttribute("alt","b");
        dotElement.setAttribute("id",colRow);
        columnGrid.appendChild(dotElement);
        if (checkWinner(colRow)){
            document.getElementById('p4').textContent="Player 1 is the winner";
        }
        currentPlayer="r";
        document.getElementById('curPlay').textContent="Player 2's turn";
    }else {
        dotElement.setAttribute("src","red.png");
        colRow= "i"+colRow;
        dotElement.setAttribute("alt","r");
        dotElement.setAttribute("id",colRow);
        columnGrid.appendChild(dotElement);
        if (checkWinner(colRow)){
            document.getElementById('p4').textContent="Player 1 is the winner";
        }
        currentPlayer="b";
        document.getElementById('curPlay').textContent="Player 1's turn";
    }
}

function checkWinner(colRow){
    //console.log(colRow);
    var count=0
    var col= colRow.charAt(1);
    var row= colRow.charAt(2); 
    var dotColor=document.getElementById("i"+col+row).alt;
    //console.log("col:",col,"row:",row);
    i=parseInt(col);
    //Vertical Check
    for(let j=0;j<6;j++){
        if (document.getElementById("i"+col+j)){
           var color=document.getElementById("i"+col+j).alt; 
           //console.log(color,dotColor);
           if (color==dotColor){
               count=count+1;
           }   
           else{
               count=0     
           }
        }  
        console.log(color);
    }
    if (count==4){
       console.log("winner");
       return true;
    }
    //Horizontal Check
    for(let i=0;i<7;i++){
        if (document.getElementById("i"+i+row)){
           var color=document.getElementById("i"+i+row).alt; 
           //console.log(color,dotColor);
           if (color==dotColor){
               count=count+1;
           }   
           else{
               count=0     
           }
        }  
        console.log(color);
    }
    if (count==4){
       console.log("winner");
       return true;
    }

    //Diagonal Check
    
    return false;
}
  