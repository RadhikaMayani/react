import React, { useState } from 'react'
import Square from './Square'

function Board() {
  const [xIsNext, setxIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))


  const onsquareClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }

    setSquares(nextSquares)
    setxIsNext(!xIsNext)
  }



  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = "Winner : " + winner
  } else {
    status = "Next is : " + (xIsNext) ? "X" : "O"
  }

  return (
    <>

      <div className='row'>{status}</div>
      <div className='row'>
        <Square value={squares[0]} handleClick={() => onsquareClick(0)} />
        <Square value={squares[1]} handleClick={() => onsquareClick(1)} />
        <Square value={squares[2]} handleClick={() => onsquareClick(2)} />
      </div>
      <div className='row'>
        <Square value={squares[3]} handleClick={() => onsquareClick(3)} />
        <Square value={squares[4]} handleClick={() => onsquareClick(4)} />
        <Square value={squares[5]} handleClick={() => onsquareClick(5)} />
      </div>
      <div className='row'>
        <Square value={squares[6]} handleClick={() => onsquareClick(6)} />
        <Square value={squares[7]} handleClick={() => onsquareClick(7)} />
        <Square value={squares[8]} handleClick={() => onsquareClick(8)} />
      </div>

    </>
  )
}

function calculateWinner(squares) {
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
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default Board