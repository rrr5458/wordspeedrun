import React from 'react'

function StreakModal({ setStreakLimit, setBang, setStreakModal }) {
    return (
        <div id="streak-selector">
          <h2>Choose streak:</h2>
          <div id="streak-options">
            <button
              onClick={() => {
                setBang(true);
                setStreakLimit(4);
                setStreakModal(false);
              }}
            >
              5
            </button>
            <button
              onClick={() => {
                setBang(true);
                setStreakLimit(9);
                setStreakModal(false);
              }}
            >
              10
            </button>
            <button
              onClick={() => {
                setBang(true);
                setStreakLimit(19);
                setStreakModal(false);
              }}
            >
              20
            </button>
            <button
              onClick={() => {
                setBang(true);
                setStreakLimit(29);
                setStreakModal(false);
              }}
            >
              30
            </button>
          </div>
        </div>
      );
}

export default StreakModal
