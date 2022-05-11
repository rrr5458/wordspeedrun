import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'

function Letter({ letterPosition, attemptValue }) {
    const { board, correctWord, currentAttempt, disabledLetters, setDisabledLetters, setCorrectLetters, setAlmostLetters, duplicates, guessesInAttempt } = useContext(AppContext)
    const letter = board[attemptValue][letterPosition]

    // console.log(guessesInAttempt)
    let correct = ""
    let almost = ""
    let almostSecond = ""
    let error = ""


    if (correctWord.length === 5 && guessesInAttempt[attemptValue] !== undefined) {
        const f = s => g => g.map((u, i) => s[i] - u && s.some((v, j) => g[j] == v | u - v ? 0 : s[j] = 1))
        const word2arr = word => [...word].map(ch => ch.charCodeAt())
        const ret2chr = ret => [...ret].map(v => v === 0 ? 'G' : v === true ? 'Y' : ' ');
        let result = ret2chr(f(word2arr(correctWord))(word2arr(guessesInAttempt[attemptValue])))
        if (result[letterPosition] === 'G') {
            correct = true
        } else if (result[letterPosition] === "Y") {
            almost = true
        } else if (result[letterPosition] === " ") {
            error = true
        }
    }


    const letterState =
        currentAttempt.attempt > attemptValue &&
        (correct ? "correct" : almost ? "almost" : almostSecond ? "almost-second" : "error");

    useEffect(() => {

        if (letter !== "" && !correct && !almost) {
            setDisabledLetters((prev) => [...prev, letter])
        }
        if (letter === correctWord[letterPosition]) {
            setCorrectLetters((prev) => [...prev, letter])
        }
        if (correctWord.includes(letter)) {
            setAlmostLetters((prev) => [...prev, letter])
        }
    }, [currentAttempt.attempt])
    return (
        <div className="letter" id={letterState}>
            {letter}
        </div>
    )
}

export default Letter
