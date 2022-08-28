import './NavBar.css';
import { Alert } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import React, {useState} from 'react';
import {generateId} from '../Utilities.js';

export function NavBar(props) {
    // NEED to pass values from search to Activity
    // MAYBE BUILD THESE FUNCTIONS IN APP, SO APP HAS ACCESS TO STATE

    let activityText;
    const storeActivityText = (e) => {
        activityText = e.target.value;
    }


    const addActivity = (activity) => {
      // Save to state + use map to render in return Fn
      
    }

    const [listOfActivities, setListOfActivities] = useState([]);
    const [activity, setActivity] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check this works
        setActivity({
            text: activityText,
            id: generateId()
        });
        setListOfActivities((prev) => [activity, ...prev]);
        console.log(listOfActivities);
        // addActivity(activity);
        // props.getListOfActivities(activity);
    }

    return (
        <nav className="navbar bg-light">
        <div className="container-fluid">
            <a className="navbar-brand">Activity Timer</a>
            <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Add activity" aria-label="Search" onChange={storeActivityText}/>
            <button className="btn btn-outline-success">Add</button>
            </form>
        </div>
        </nav>
    );
}