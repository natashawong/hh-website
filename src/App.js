import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import Happenings from './Pages/Happenings';
import Archives from './Pages/Archives';
import MissionVision from './Pages/IndPages/MissionVision';
import Members from './Pages/IndPages/Members';
import Read from './Pages/Read';
import Vol2 from './Pages/IndPages/Volume2';
import Partner from './Pages/IndPages/Partner';
import ContactUs from './Pages/ContactUs';
import Vol3LS from './Pages/IndPages/Vol3LS';

function App() {
  return (
      <Switch>
        {/* About Us */}
        <Route exact path='/aboutus' component={AboutUs}/>
        {/* > mission&vission  */}
        <Route exact path='/aboutus/missionvission' component={MissionVision}/>
        {/* > members  */}
        <Route exact path='/aboutus/members' component={Members}/>

        {/* Archives */}
        <Route exact path='/archives' component={Archives}/>
        {/* > vol2  */}
        <Route exact path='/archives/volume2' component={Vol2}/>

        {/* Happenings */}
        <Route exact path='/happenings' component={Happenings}/>
        {/* > vol3 launch symposium */}
        <Route exact path='/happenings/vol3ls' component={Vol3LS}/>

        {/* Read */}
        <Route exact path='/read' component={Read}/>

        {/* Contact */}
        <Route exact path='/contact' component={ContactUs}/>

        <Route exact path='/' component={Home}/>
        <Route path='*' component={Home}/>

      </Switch>
  );
}

export default App;
