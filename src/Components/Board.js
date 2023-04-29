import Square from './Sqaure'

export default function Board({ squares, xIsNext, onPlay }) {


    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) return;
        const nextSquares = squares.slice();
        if (xIsNext)
            nextSquares[i] = "X";
        else
            nextSquares[i] = "O";
        onPlay(nextSquares)

    }

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = `Winner is ${winner}`
    } else {
        status = `Next Player : ${xIsNext ? "X" : "O"}`
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square num={0} value={squares[0]} onClickSquare={() => handleClick(0)} />
                <Square num={1} value={squares[1]} onClickSquare={() => handleClick(1)} />
                <Square num={2} value={squares[2]} onClickSquare={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square num={3} value={squares[3]} onClickSquare={() => handleClick(3)} />
                <Square num={4} value={squares[4]} onClickSquare={() => handleClick(4)} />
                <Square num={5} value={squares[5]} onClickSquare={() => handleClick(5)} />

            </div>
            <div className="board-row">
                <Square num={6} value={squares[6]} onClickSquare={() => handleClick(6)} />
                <Square num={7} value={squares[7]} onClickSquare={() => handleClick(7)} />
                <Square num={8} value={squares[8]} onClickSquare={() => handleClick(8)} />
            </div>
        </>


    )
}
