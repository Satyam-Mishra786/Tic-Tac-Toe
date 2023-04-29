import { useState } from "react"
import Board from "./Board";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // const [xIsNext, setXisNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]

        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let desc;

        if (move > 0) {
            desc = `Go To Move #${move}`
        } else desc = "Go to Start"

        return (
            <li className="moves-list" key={move}>
                <div className="move" onClick={() => jumpTo(move)}>{desc}</div>
            </li>
        )
    })

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />

            </div>
            <div className="game-info">
                {moves}
            </div>
        </div>
    );
}


