import React from 'react'

function Modal({gameTimes, setEndModal, timesTotal}) {
    return (
    <div class="container">
    <div class="cookiesContent" id="cookiesPopup">
        <button class="close">✖</button>
        <img src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="cookies-img" />
        <p>
            <span>{("0" + Math.floor((timesTotal / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((timesTotal / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((timesTotal / 10) % 100)).slice(-2)}</span>
        </p>
        <button class="accept" onClick={() => setEndModal(false)}>That's fine!</button>
    </div>
    </div>
    )
}

export default Modal
