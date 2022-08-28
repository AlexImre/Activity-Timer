import React from 'react';
import './Activity.css';

export function Activity(props) {

    if (!props.listOfActivities) {
        return;
    }

    return (
        <div>
            {props.text}
        </div>
    )
}