//Query Selects
let board = document.querySelector('#sketch-board');


//Other variables
let boardSize=64;

function makeBoard(boardSize)
{
    for(let i=1;i<=boardSize;i++)
    {
        let row = document.createElement("div");
        row.className = "board-row";
        for(let j=1;j<=boardSize;j++)
        {
            let cell=document.createElement("div");
            cell.className = "board-cell";
            let cellId=
            cell.setAttribute('id',)
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}


window.onload
{
    makeBoard(boardSize);
}