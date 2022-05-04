import React, { useContext } from 'react'
import { AppContext } from '../App'

function Key({ keyValue, bigKey, disabled, correct, almost }) {
    const { onSelectLetter, onDelete, onEnter } = useContext(AppContext)

    const selectLetter = () => {
        if (keyValue === "ENTER") {
            onEnter()
        } else if (keyValue === "DEL") {
            onDelete()
        } else {
            onSelectLetter(keyValue)
        }
    }
    return (
        <div className="key" id={bigKey ? "big" : correct ? "correct-key" : almost ? "almost-key" : disabled && "disabled-key"} onClick={selectLetter}>
            {keyValue}
        </div>
    )
}

export default Key
