import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import { CircularProgress } from '@material-ui/core';
const { isEmpty } = require('lodash');

class CylinderSeals extends Component {
  constructor(props) {
    super(props);        
    this.state = {
      photos: []
    };   
  }  
componentDidMount() {    
  this.getImages();
  commonScript.enableScroll();
}

getImages = ( ) => {
  axios({
    url: '/api/getImages',
    method: 'POST', 
    data: {
      category : 'CylinderSeal' 
    }
  })
  .then((response) => {            
    const { images } = response.data;    
    this.setState({ photos: images })  
  })
  .catch((error) => console.log(error))      
}

    render() {
      const { photos } = this.state;       
          
      return (
      <div className="siteContainer">
        <main className="archive">             
            <div className="section-content">                                                               
                <section id="tree-of-life">                      
                    <h2>עץ החיים</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"TreeOfLife")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>               
                <section id="winged-chamber">
                    <h2>תא מכונף</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"WingedChamber")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section> 
                <section id="flying-ring">
                    <h2>טבעת מעופפת</h2>                    
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"FlyingRing")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>                                                      
                <section id="misc">
                    <h2>שונות</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"Misc")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>                                                      
            </div>
            <nav className="section-nav">
                <ol>                                                              
                    <li><a href="#top">עץ החיים</a></li>                                   
                    {/* <li><a href="#nibiru-pull">משיכת ניבירו</a></li>                     */}                    
                    <li><a href="#winged-chamber">תא מכונף</a></li>
                    <li><a href="#flying-ring">טבעת מעופפת</a></li>
                    <li><a href="#misc">שונות</a></li>
                </ol>
            </nav>          
        </main>
        </div>
      );
    }
  }
  

export default CylinderSeals;