import React, { Component } from 'react';
import Manager from './Manager';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notfound from './Notfound';
import Home from './Home';
import CylinderSeals from './CylinderSeals';
import Megalith from './Megalith';
import Nephilim from './Nephilim';
import Anunnaki from './Anunnaki';

class Content extends Component {
  
    render() {

      return (     
        <Router>  
            <Switch>                      
            <Route activeClassName='is-active' exact={true} path="/" component={Home} />            
            <Route exact path="/manager" component={Manager} />            
            <Route exact path="/cylinder-seals/" component={CylinderSeals} />
            <Route exact path="/megalith/" component={Megalith} />
            <Route exact path="/nephilim/" component={Nephilim} />
            <Route exact path="/anunnaki/" component={Anunnaki} />
            <Route  component={Notfound} />
            </Switch> 
        </Router> 
      );
    }
  }
  

export default Content;