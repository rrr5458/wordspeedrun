import React from 'react'
import GameTimes from './GameTimes'

function Modal({gameTimes, setEndModal, timesTotal}) {
    return (
    <div class="container">
        {console.log(gameTimes, timesTotal,"MODALLAPS")}
    <div class="cookiesContent" id="cookiesPopup">
        <button class="close">✖</button>
        <img src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="cookies-img" />
        <div>
            <span>{("0" + Math.floor((timesTotal / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((timesTotal / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((timesTotal / 10) % 100)).slice(-2)}</span>
        </div>
        <GameTimes class="watches" gameTimes={gameTimes} />
        <button class="accept" onClick={() => setEndModal(false)}>Nother One</button>
    </div>
    </div>
    )
}

export default Modal
