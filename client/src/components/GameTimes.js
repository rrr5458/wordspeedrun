import React from 'react'

function GameTimes({ gameTimes }) {

    return (
        <div className="game-times">
            {gameTimes.map((time, i) => {
                return (
                    <div>
                        <p>Lap {i + 1}: </p>
                        <div className="numbers">
                            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GameTimes
