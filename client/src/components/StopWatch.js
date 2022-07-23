import React, { useEffect } from 'react'

function StopWatch({ running, time, setTime }) {

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    return (
        <div className="stopwatch">
            <div>
                <span className="numbers">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span className="numbers">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span className="numbers">{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
        </div>
    );
}

export default StopWatch
