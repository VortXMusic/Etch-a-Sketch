//Query Selects
let board = document.querySelector('#sketch-board');
const sizeButton = document.querySelector('#change-size-button');
const gridInput = document.querySelector('#grid-size-input');
const resetButton = document.querySelector('#reset-button');
const clearButton = document.querySelector('#clear-button');

//Other variables
let boardSize=64;
let isMouseDown = false;


//Detecting mousedown
document.addEventListener('mousedown',()=>isMouseDown=true);
document.addEventListener('mouseup',()=>isMouseDown=false);

//Function Declarations and Definitions
function makeBoard(boardSize)
{
    board.innerHTML = '';
    for(let i=0;i<boardSize;i++)
    {
        let row = document.createElement("div");
        row.className = "board-row";
        for(let j=1;j<=boardSize;j++)
        {
            let cell=document.createElement("div");
            cell.className = "board-cell";
            let cellId=boardSize*i+j;
            cell.setAttribute('id',`${cellId}`);
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    const cells = document.querySelectorAll('.board-cell');
    cells.forEach((cell)=>cell.addEventListener('mouseover',()=>etchCell(cell.id)));
}

function etchCell(id)
{
    //etch occurs only if mouseDown is true after clicking
    if(isMouseDown)
    {
        //console.log(id);
        //Selects the hovered text
        let hoverCell = document.getElementById(id);
        //Change color to emulate an etch
        hoverCell.style.cssText = 'background-color: black;';
    }
}

function clearBoard()
{
    const cells = document.querySelectorAll('.board-cell');
    cells.forEach((cell)=>{
        let reCell = document.getElementById(cell.id);
        reCell.style.cssText = 'background-color: white';
    });
}

//Event Listener declarations
sizeButton.addEventListener('click',()=>makeBoard(gridInput.value));

resetButton.addEventListener('click',()=>{
gridInput.value=64;
boardSize=64;
makeBoard(boardSize);
});

clearButton.addEventListener('click',()=>clearBoard());

//onload function
window.onload
{
    makeBoard(boardSize);
}