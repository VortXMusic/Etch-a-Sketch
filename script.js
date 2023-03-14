//Query Selects
let board = document.querySelector('#sketch-board');


//Other variables
let boardSize=64;

function makeBoard(boardSize)
{
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
}

function etchCell(id)
{
    //console.log(id);
    //Selects the hovered text
    let hoverCell = document.getElementById(id);
    //Change color to emulate an etch
    hoverCell.style.cssText = 'background-color: grey;';
}

window.onload
{
    makeBoard(boardSize);
    //select cells to look for hover event
    const cells = document.querySelectorAll('.board-cell');
    cells.forEach((cell)=>cell.addEventListener('mouseover',()=>etchCell(cell.id)));
}