import './App.css';
import {NavBar} from './NavBar';
import {Activity} from './Activity';
import React, {useState} from 'react';
import {generateId} from '../Utilities.js';

function App() {
  
  const [activity, setActivity] = useState({});  
  const storeActivityText = (e) => {
      setActivity({
        text: e.target.value,
        // id: ''
    });
  }

  const [listOfActivities, setListOfActivities] = useState([]);
  const handleSubmit_AddActivity = () => {
    // Set activity ID onSubmit rather than onChange so values are unique --- IS THERE A BETTER WAY?
    setActivity({...activity, id: generateId()});
    setListOfActivities((prev) => [activity, ...prev]);
    // Reset input field to display blank
    setActivity('');
    
    // Use react way of doing this -- Dont update REAL DOM when working with virtual DOM
    document.querySelector('input').value = '';
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar
          storeActivityText={storeActivityText}
          handleSubmit_AddActivity={handleSubmit_AddActivity} />
        <div className="ActivityContainer">
          {/* && if true -> execute code to the right */}
          {/* ?? nullish coalescor */}
          {listOfActivities && listOfActivities.map(
            (activities) => (
            <Activity key={activities.id} text={activities.text} />
            ))}
        </div>
      </header>
    </div>
  );
}

export default App;

