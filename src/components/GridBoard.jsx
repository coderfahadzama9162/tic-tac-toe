import { useState } from "react";



export default function GridBoard({ onSelecetSquare, activePlayerSymbol,board}) {
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   function updateGameBoard(row, col) {
//     setGameBoard((prevBoard) => {
//       const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];

//       updatedBoard[row][col] = activePlayerSymbol;

//       return updatedBoard;
//     });

//     onSelecetSquare();
    //   }
    
   

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelecetSquare(rowIndex, colIndex)} disabled={col!==null} >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
