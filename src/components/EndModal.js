import React from 'react'
import GameTimes from './GameTimes'

function EndModal({gameTimes, setEndModal, setBang}) {

    const addTimes = (gameTimes) => {
        let total = 0
        gameTimes.map((t) => {
          total += t
        })
        return total
      }

    return (
    <div class="container">
    <div class="cookiesContent" id="cookiesPopup">
        <button class="close">✖</button>
        <div>
            <p>Total Time</p>
            <div>
                <span>{("0" + Math.floor((addTimes(gameTimes) / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((addTimes(gameTimes) / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((addTimes(gameTimes) / 10) % 100)).slice(-2)}</span>
            </div>
        </div>
        <GameTimes class="watches" gameTimes={gameTimes} />
        <button class="accept" onClick={() => {setEndModal(false); setBang(false)}}>Nother One</button>
    </div>
    </div>
    )
}

export default EndModal
