import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Notfound = lazy(() => import('./Notfound'));
const Home = lazy(() => import('./Home'));
const CylinderSeals = lazy(() => import('./CylinderSeals'));  
const Megalith = lazy(() => import('./Megalith'));  
const Nephilim = lazy(() => import('./Nephilim'));  
const Anunnaki = lazy(() => import('./Anunnaki'));  
const Manager = lazy(() => import('./Manager'));  

class Content extends Component {
    render() {
      return (     
        <Router>  
          <Suspense fallback={<div id="loading">Loading...</div>}>
            <Switch>                      
            <Route activeClassName='is-active' exact={true} path="/" component={Home} />            
            <Route exact path="/manager" component={Manager} />            
            <Route exact path="/cylinder-seals/" component={CylinderSeals} />
            <Route exact path="/megalith/" component={Megalith} />
            <Route exact path="/nephilim/" component={Nephilim} />
            <Route exact path="/anunnaki/" component={Anunnaki} />
            <Route  component={Notfound} />
            </Switch> 
          </Suspense>
        </Router> 
      );
    }
  }
  

export default Content;