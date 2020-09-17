import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';
import ImageGallery from './ImageGallery';
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
                    {!isEmpty(photos) ? <h2>עץ החיים</h2>: null}                  
                    <ImageGallery photos={commonScript.filter(photos,"TreeOfLife")}></ImageGallery>
                </section>               
                <section id="winged-chamber">
                    {!isEmpty(photos) ? <h2>תא מכונף</h2>: null}
                    <ImageGallery photos={commonScript.filter(photos,"WingedChamber")}></ImageGallery>
                </section> 
                <section id="flying-ring">
                    {!isEmpty(photos) ? <h2>טבעת מעופפת</h2>: null}
                    <ImageGallery photos={commonScript.filter(photos,"FlyingRing")}></ImageGallery>
                </section>                                                      
                <section id="misc">
                    {!isEmpty(photos) ? <h2>שונות</h2>: null}
                    <ImageGallery photos={commonScript.filter(photos,"Misc")}></ImageGallery>
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