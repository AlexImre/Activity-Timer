import './NavBar.css';
import { Alert } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import React, {useState} from 'react';

export function NavBar(props) {
    // NEED to pass values from search to Activity
    // MAYBE BUILD THESE FUNCTIONS IN APP, SO APP HAS ACCESS TO STATE

    const storeActivityText = (e) => {
        props.storeActivityText(e);
    }

    const handleSubmit_AddActivity = (e) => {
        e.preventDefault();
        props.handleSubmit_AddActivity();
    }

    return (
        <nav className="navbar bg-light">
        <div className="container-fluid">
            <a className="navbar-brand">Activity Timer</a>
            <form className="d-flex" onSubmit={handleSubmit_AddActivity}>
            <input className="form-control me-2" type="search" placeholder="Add activity" aria-label="Search" onChange={storeActivityText}/>
            <button className="btn btn-outline-success">Add</button>
            </form>
        </div>
        </nav>
    );
}