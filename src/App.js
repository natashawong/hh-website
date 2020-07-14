import React from 'react';
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
import Vol2 from './Pages/IndPages/Volume2';
import Partner from './Pages/IndPages/Partner';
import Contact from './Pages/IndPages/Contact';

// TO DO: add a NoMatch page for errors

function App() {
  return (
      <Switch>
        {/* About Us */}
        <Route exact path='/aboutus' component={AboutUs}/>
        {/* > mission&vission  */}
        <Route exact path='/aboutus/missionvission' component={MissionVision}/>

        {/* Archives */}
        <Route exact path='/archives' component={Archives}/>
        {/* > vol2  */}
        <Route exact path='/archives/volume2' component={Vol2}/>

        {/* Individual Pages */}
        <Route exact path='/happenings' component={Happenings}/>
        <Route exact path='/read' component={Read}/>
        <Route exact path='/partner' component={Partner}/>
        <Route exact path='/contact' component={Contact}/>

        <Route exact path='/' component={Home}/>
        <Route path='*' component={Home}/>

      </Switch>
  );
}

export default App;
