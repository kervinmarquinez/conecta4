import { useState } from 'react'
import './App.css'
import { Arrow } from './Arrow'
import { Square } from './Square'


const TURNS = {
  Y: '🟡',
  R: '🔴'
}

function App() {

  const [board, setBoard] = useState(Array(42).fill(null))
  const [turn, setTurn] = useState(TURNS.Y)
  const [winner, setWinner] = useState(null)
  const [arrow, setArrow] = useState(Array(7).fill(null))

  const checkWinner = (boardToCheck, index) => {

    if (
        boardToCheck[index] &&
        boardToCheck[index] === (boardToCheck[index - 1] || boardToCheck[index + 1]) &&
        boardToCheck[index] === (boardToCheck[index - 2] || boardToCheck[index + 2]) &&
        boardToCheck[index] === (boardToCheck[index - 3] || boardToCheck[index + 3])
        
      ) {
        
        return boardToCheck[index];
      }

    if (
      boardToCheck[index] &&
      boardToCheck[index] === (boardToCheck[index - 7] || boardToCheck[index + 7]) &&
      boardToCheck[index] === (boardToCheck[index - 14] || boardToCheck[index + 14]) &&
      boardToCheck[index] === (boardToCheck[index - 21] || boardToCheck[index + 21])
      
    ) {

      return boardToCheck[index];
    }

    if (
      boardToCheck[index] &&
      boardToCheck[index] === (boardToCheck[index - 6] || boardToCheck[index + 6]) &&
      boardToCheck[index] === (boardToCheck[index - 12] || boardToCheck[index + 12]) &&
      boardToCheck[index] === (boardToCheck[index - 18] || boardToCheck[index + 18])
      
    ) {

      return boardToCheck[index];
    }

  }

  const refreshPage = () => {
    window.location.reload(false)
  }

  const checkEndGame = () => {
    return newBoard.every(square => square !== null)
  }
  
  const updateBoard = (index) => {

    if (winner) return;

    const newBoard = [...board]
    
    newBoard[index] = turn
    setBoard(newBoard)
    
    
    const newTurn = turn === TURNS.Y ? TURNS.R : TURNS.Y
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard,index)
    if(newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }



  return (
    <main className='board'>
      <h1>Conecta 4</h1>
      

      <section className='game game-turns'>
        {
          arrow.map((item, index) => {
            return (
              <Arrow
                key={index}
                index={index}
                updateBoard={updateBoard}
              />
            )
          })
          
        }

      </section>

      <section className='game'>
        {
          board.map((square,index) => {
            return (
              <Square 
              key={index}
              index={index}
              >
                {square}
            </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        
        <div className='turn-container'>
        <Square isSelected={turn === TURNS.Y}>{TURNS.Y}</Square>
        <Square isSelected={turn === TURNS.R}>{TURNS.R}</Square>
        </div>

        <button onClick={refreshPage}>Empezar de nuevo</button>


      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2> 
                {
                  winner === false
                  ? 'Empate'
                  : `¡El Ganador es ${winner}!`
                }
              </h2>
              <button className='button-modal' onClick={refreshPage}>Empezar de nuevo</button>
            </div>
          </section>
        )
      }



    </main>
  )
}

export default App
