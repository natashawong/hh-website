import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import Happenings from './Pages/Subpages/Happenings';
import MissionVision from './Pages/Subpages/MissionVision';
import Read from './Pages/Subpages/Read';

// TO DO: add a NoMatch page for errors

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/aboutus'>
          <AboutUs/>
        </Route>

        <Route path='/happenings'>
          <Happenings/>
         </Route>

        <Route path='/missionvission'>
          <MissionVision/>
        </Route>

        <Route path='/read'>
          <Read/>
        </Route>

        <Route path='/'>
          <Home/>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
