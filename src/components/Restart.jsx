export default function Restart({ winner, onRestart}) {
    

    return <div id="game-over">
        <h2>Game Over!</h2>

        {winner && <p>winner {winner}</p>}
        {!winner && <p>it's a draw</p>}

         <button onClick={onRestart}>Restart the match</button>
    </div>
}