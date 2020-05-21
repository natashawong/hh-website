import React from 'react';
import Header from './Components/Header';
import {SPACING} from './Enums/Enums';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{padding: SPACING.PAGE_SPACE}}>
        <Header pageHeader={true} pageHeaderTitle={"ABOUT"} pageHeaderSubtitle={"vision & mission"}/>
      </div>
    </div>
  );
}

export default App;
