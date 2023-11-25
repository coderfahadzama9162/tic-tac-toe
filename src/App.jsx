import { useState } from "react";
import GridBoard from "./components/GridBoard";
import Player from "./components/player";
import Log from "./components/Log";
import Restart from "./components/Restart";
import { WINNING_COMBINATIONS } from "./winning_combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function App() {
  // const [activePlayer, setActivePlayer] = useState("X");

  const [turnArray, setTurnArray] = useState([]);

  let activePlayer = "X";
  let winner = null;
  let board = [...initialGameBoard.map(array => [...array])];

  if (turnArray.length > 0 && turnArray[0].playerTurn === "X") {
    activePlayer = "0";
  }
  

  for (const squreborad of turnArray) {
      
    const square = squreborad.square;
    const row = square.row;
    const col = square.col;
    const symbol = squreborad.playerTurn;
    
      console.log(board)

     board[row][col] = symbol;


  }

  for (const combination of WINNING_COMBINATIONS) {
     
    const firstSquarSymbol = board[combination[0].row][combination[0].column];
    const secondSquarSymbol = board[combination[1].row][combination[1].column];
    const thirdSqureSymbol = board[combination[2].row][combination[2].column];

    
    if (firstSquarSymbol && firstSquarSymbol === secondSquarSymbol && secondSquarSymbol === thirdSqureSymbol) {
      winner = firstSquarSymbol;
   }

  }

  const hasDraw = !winner && turnArray.length == 9;

  function handleSelectSquare(rowIndex, colIndex) {
    let playerSymbol = "X";

    if (turnArray.length > 0 && turnArray[0].playerTurn === "X") {
      playerSymbol = "0";
    }

   // setActivePlayer((activePlayer) => (activePlayer === "X" ? "0" : "X"));

    setTurnArray((prevTurn) => [
      { square: { row: rowIndex, col: colIndex }, playerTurn: playerSymbol },
      ...prevTurn,
    ]);
  }

  function handleRestart() {
    
    setTurnArray([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player2"
            symbol="0"
            isActive={activePlayer === "0"}
          />
        </ol>

        {(winner || hasDraw) && <Restart winner={winner} onRestart={handleRestart} />}

        <GridBoard
          onSelecetSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          board={board}
        />
      </div>
      <Log turnArray={turnArray} />
    </main>
  );
}

export default App;
