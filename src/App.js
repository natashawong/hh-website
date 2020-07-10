import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import Happenings from './Pages/IndPages/Happenings';
import Archives from './Pages/Archives';
import MissionVision from './Pages/IndPages/MissionVision';
import Read from './Pages/IndPages/Read';
import Vol2 from './Pages/IndPages/Archives';
import Partner from './Pages/IndPages/Partner';
import Contact from './Pages/IndPages/Contact';

// TO DO: add a NoMatch page for errors

function App() {
  return (
    <Router>
      <Switch>
        {/* About Us */}
        <Route path='/aboutus' component={AboutUs}/>
        {/* > mission&vission  */}
        <Route path='/aboutus/missionvission' component={MissionVision}/>

        {/* Archives */}
        <Route path='/archives' component={Archives}/>
        {/* > vol2  */}
        <Route path='/archives/volume2' component={Vol2}/>

        {/* Individual Pages */}
        <Route path='/happenings' component={Happenings}/>
        <Route path='/read' component={Read}/>
        <Route path='/partner' component={Partner}/>
        <Route path='/contact' component={Contact}/>

        <Route path='/' component={Home}/>

      </Switch>

    </Router>
  );
}

export default App;
