
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { createContext, useEffect, useState } from 'react';
import { boardDefault, generateWordSet } from './components/Words';
import GameOver from './components/GameOver';
import StopWatch from './components/StopWatch';
import GameTimes from './components/GameTimes';
import StreakSelector from './components/StreakSelector';


export const AppContext = createContext();


function App() {
  const [board, setBoard] = useState(boardDefault)
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letterPosition: 0 })
  const [wordSet, setWordSet] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([])
  const [correctLetters, setCorrectLetters] = useState([])
  const [almostLetters, setAlmostLetters] = useState([])
  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false })
  const [correctWord, setCorrectWord] = useState("")
  const [duplicates, setDuplicates] = useState([])
  const [gameCount, setGameCount] = useState(0)
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [gameTimes, setGameTimes] = useState([])
  const [timesTotal, setTimesTotal] = useState(0)
  const [guessesInAttempt, setGuessesInAttempt] = useState([])
  const [streakLimit, setStreakLimit] = useState(0)
  const [bang, setBang] = useState(false)


  useEffect(() => {

    if (bang) {
      setRunning(true)
    }


  }, [bang, gameCount])


  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
      setCorrectWord(words.newWord.toUpperCase())


    })
  }, [gameCount])

  useEffect(() => {
    let array = correctWord.split('')
    let dupes = array.filter((a, i, aa) => aa.indexOf(a) === i && aa.lastIndexOf(a) !== i)
    let finalArray = []
    for (let i = 0; i < 5; i++) {
      if (dupes.includes(array[i])) {
        finalArray.push(array[i])

      }
    }
    setDuplicates(finalArray)
  }, [correctWord])


  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPosition > 4) return
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue
    setBoard(newBoard)
    setCurrentAttempt({ ...currentAttempt, letterPosition: currentAttempt.letterPosition + 1 })


  }

  const addTimes = (gameTimes) => {
    let total = 0
    gameTimes.map((t) => {
      total += t
    })
    return total
  }

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = ""
    setBoard(newBoard)
    setCurrentAttempt({ ...currentAttempt, letterPosition: currentAttempt.letterPosition - 1 })
  }

  const onEnter = () => {
    console.log(correctWord)
    if (currentAttempt.letterPosition !== 5) return;
    let currentWord = ""
    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.attempt][i]
    }

    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPosition: 0 })
      setGuessesInAttempt((prev) => [...prev, currentWord])
    } else {
      alert("Word not found")
    }

    if (currentWord === correctWord) {
      if (gameCount === streakLimit) {
        endGame()
        setTimesTotal(addTimes(gameTimes))
        setGameTimes([])

        return;
      } else
        setGameTimes((prev) => [...prev, time])
      setRunning(false)
      setGameOver({ gameOver: true, guessedWord: true });
      newGame()

      return;
    }

    if (currentAttempt.attempt === 5) {
      setRunning(false)
      setGameOver({ gameOver: true, guessedWord: false })
      setGameTimes([])
      newGame()
    }

  }


  const newGame = () => {
    setGameCount(gameCount + 1)
    setBoard([
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ])
    setCurrentAttempt({ attempt: 0, letterPosition: 0 })
    setGameOver({ gameOver: false, guessedWord: false })
    setDisabledLetters([])
    setCorrectLetters([])
    setAlmostLetters([])
    setTime(0)
    setGuessesInAttempt([])
  }

  const endGame = () => {
    setTime(0)
    setGameCount(0)
    setRunning(false)
    setBoard([
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ])
    setCurrentAttempt({ attempt: 0, letterPosition: 0 })
    setGameOver({ gameOver: false, guessedWord: false })
    setDisabledLetters([])
    setCorrectLetters([])
    setAlmostLetters([])
    setGuessesInAttempt([])
    setBang(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div id="empty-space"> </div>
          <h1>Wordle</h1>
          <StreakSelector setStreakLimit={setStreakLimit} streakLimit={streakLimit} setBang={setBang}/>
        </nav>
        <AppContext.Provider value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          setGameOver,
          newGame,
          correctLetters,
          setCorrectLetters,
          almostLetters,
          setAlmostLetters,
          duplicates,
          guessesInAttempt,
        }}>
          <div className="game" >
            <div class="board-watch">
              <GameTimes class="watches" gameTimes={gameTimes} />
              <Board />
              <div class="watches">
                <StopWatch running={running} time={time} setTime={setTime} />
              </div>
            </div>
            <Keyboard />
          </div>
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
