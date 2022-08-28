import './App.css';
import {NavBar} from './NavBar';
import {Activity} from './Activity';
import React, {useState} from 'react';

function App() {
  
  // THIS NEEDS TO HAPPEN IN NAV BAR AND THEN PASS TO APP
  const getListofActivities = (activity) => {
    // Save to state + use map to render in return Fn
    return activity;
  }

  const ListOfActivities = getListofActivities()
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="ActivityContainer">
          {/* {!listOfActivities? "" : listOfActivities.map(
            (activities) => (
            <Activity key={listOfActivities[0].id} listOfActivities={listOfActivities} text={listOfActivities[0].text} getActivities={getListofActivities} />
            ))} */}
        </div>
      </header>
    </div>
  );
}

export default App;

