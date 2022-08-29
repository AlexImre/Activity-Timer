import React from 'react';
import './Activity.css';
import {Timer} from './Timer';

export function Activity(props) {

    // Need to return Timer Component here

    return (
        <div className="activityContainer">
            <div className="activityTextContainer">
                <div className="activityText">
                    {props.text}
                </div>
                <div className="activityTheme">
                    ●
                </div>
            </div>

            <div className="timer">
                <Timer />
            </div>
        </div>
    )
}