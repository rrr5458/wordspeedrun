import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'

function StreakSelector({ setStreakLimit, setBang}) {



    return (
        <div id="streak-selector">
            <h2>
                Choose streak:
            </h2>
            <div id="streak-options">
                <button
                    onClick={() => {
                        setBang(true) 
                        setStreakLimit(4)}}
                >
                    5
                </button>
                <button
                    onClick={() => {
                        setBang(true) 
                        setStreakLimit(9)}}
                >
                    10
                </button>
                <button
                    onClick={() => {
                        setBang(true) 
                        setStreakLimit(19)}}
                >20
                </button>
                <button
                    onClick={() => {
                        setBang(true) 
                        setStreakLimit(29)}}
                >30
                </button>
            </div>
        </div>
    )
}

export default StreakSelector
