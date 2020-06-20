import React, { Component } from 'react';
import Manager from './Manager';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notfound from './Notfound';
import Home from './Home';
import CylinderSeals from './CylinderSeals';
import Megalith from './Megalith';
import ElongatedSkulls from './ElongatedSkulls';
// import Essentials from './Essentials';
// import Technology from './Technology';
// import Sumer from './Sumer';
// import Creation from './Creation';
// import Nephilim from './Nephilim';
// import Anunnaki from './Anunnaki';
// import Knowledge from './Knowledge';
// import Archive from './Archive';

class Content extends Component {
  
    render() {

      return (     
        <Router>  
            <Switch>                      
            <Route activeClassName='is-active' exact={true} path="/" component={Home} />
            {/* <Route exact path="/essentials" component={Essentials} />
            <Route exact path="/technology" component={Technology} />
            <Route exact path="/sumer" component={Sumer} />
            <Route exact path="/creation" component={Creation} />
            <Route exact path="/nephilim" component={Nephilim} />
            <Route exact path="/anunnaki" component={Anunnaki} />
            <Route exact path="/knowledge" component={Knowledge} /> */}
            <Route exact path="/manager" component={Manager} />
            
            <Route exact path="/cylinderSeals" component={CylinderSeals} />
            <Route exact path="/megalith" component={Megalith} />
            <Route exact path="/elongatedSkulls" component={ElongatedSkulls} />
            <Route  component={Notfound} />
            </Switch> 
        </Router> 
      );
    }
  }
  

export default Content;