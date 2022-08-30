import React from 'react';
import './Timer.css';
import { useState, useEffect } from 'react';
import useTimer from 'easytimer-react-hook';

export function Timer(props) {
    // https://github.com/AlexImre/easytimer-react-hook
    // DO I NEED TO PUT ALL TIMER LOGIC INSIDE ACTIVITY SO THAT IT FOLLOWS ACTIVITY??
    const [timer, isTargetAchieved] = useTimer({});

    const [display, setDisplay] = useState(<i class="fa-solid fa-play"></i>);
    const handleClickStartAndPause = () => {
        !timer.isRunning()? timer.start({}) : timer.pause({});
        !timer.isRunning()? setDisplay(<i class="fa-solid fa-play"></i>) : setDisplay(<i class="fa-solid fa-pause"></i>);
        }

    const handleClickAdd = () => {
        addToTimeBank();
        timer.reset({});
        timer.stop({});
        setDisplay(<i class="fa-solid fa-play"></i>);
    }

    const handleClickReset = () => {
        timer.reset({});
        timer.stop({});
        setDisplay(<i class="fa-solid fa-play"></i>);
    }

    const [timeBank, setTimeBank] = useState(0);
    const addToTimeBank = () => {
        const timeToAdd = timer.getTimeValues();
        const hoursElapsed = timeToAdd.hours;
        const minsElapsed = timeToAdd.minutes;
        const secondsElapsed = timeToAdd.seconds;
        const timeElapsedInSeconds = (hoursElapsed * 60 * 60) + (minsElapsed * 60) + (secondsElapsed);
        const timeElapsedInMilliSeconds = timeElapsedInSeconds * 1000;
        setTimeBank((prev) => prev + timeElapsedInMilliSeconds);
    };   


    return (
        <div>
            <div className="timerContainer">
                <div className="timeAndButtonsContainer">
  
                        <button className="playButton" onClick={handleClickStartAndPause}>{display}</button> 
                    <div className="time"> 
                        {timer.getTimeValues().toString()}
                    </div>
                    <div className="buttons">
                        <button className ="resetButton" onClick={handleClickReset}><i class="fa-solid fa-arrow-rotate-left"></i></button>
                    </div>
                </div>
                <div>
                    <button className="addButton" onClick={handleClickAdd}><i class="fa-solid fa-plus"></i> Add time</button>
                    <br></br>
                    Total time: {new Date(timeBank).toISOString().slice(11, 19)}
                </div>
            </div>
        </div>
    )
}

{/* <i class="fa-solid fa-pause"></i> */}