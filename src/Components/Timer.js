import React from 'react';
import './Timer.css';
import { useState, useEffect } from 'react';

export function Timer(props) {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

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

    const getToday = () => {
        const now = new Date()
        const year = now.getFullYear()
        let month = now.getMonth() + 1
        month = month >= 10 ? month : '0' + month
        let day = now.getDate()
        day = day >= 10 ? day : '0' + day
        const today = `${year}-${month}-${day}`
        return today
      }

      console.log(getToday());
      console.log(Date.now());

    return (
        <div>
            <div className="TimerContainer">
            </div>
            <div className="stopwatch">
                <div className="numbers">
                    <span>{("0" + Math.floor((time / (1000 * 60 * 60)) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / (1000 * 60)) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                </div>
                <div className="buttons">
                    <button onClick={!running? () => setRunning(true) : () => setRunning(false)}>▶️</button>
                    <button onClick={() => setTime(0)}>Reset</button>       
                </div>
            </div>
        </div>
    )
}