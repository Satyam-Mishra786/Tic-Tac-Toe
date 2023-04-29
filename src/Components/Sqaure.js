export default function Square({ num, value, onClickSquare }) {
    return (
        <div id={"sq" + (num)} className="square" onClick={onClickSquare} >{value}</div>
    )
}