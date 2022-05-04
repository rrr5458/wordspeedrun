import React, { useContext } from 'react'
import { AppContext } from '../App'


function GameOver() {
    const { gameOver, setGameOver, currentAttempt, correctWord, newGame } = useContext(AppContext)
    return (
        <div className="gameOver">

            <h3>{gameOver.guessedWord ? "You correctly guesed" : "You failed"}</h3>
            <h1>Correct: {correctWord}</h1>
            {gameOver.guessedWord && (<h3>You guessed in {currentAttempt.attempt} attempts </h3>)}
            <button type="button" onClick={newGame}>New Game</button>
        </div>
    )
}

export default GameOver
