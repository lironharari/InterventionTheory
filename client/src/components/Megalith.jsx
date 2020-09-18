import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import { CircularProgress } from '@material-ui/core';
const { isEmpty } = require('lodash');

class Megalith extends Component {
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
      category : 'Megalith' 
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
            <section id="sacsayhuaman">
                    <h2>סאסקיואמן</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"Sacsayhuaman")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>               
                <section id="egypt">
                    <h2>מצרים</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"Egypt")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>
                <section id="baalbek">
                    <h2>בעלבק</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"Baalbek")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>  
            </div>
            <nav className="section-nav">
                <ol>                                                              
                    <li><a href="#top">סאסקיואמן</a></li>               
                    <li><a href="#egypt">מצרים</a></li>               
                    <li><a href="#baalbek">בעלבק</a></li>                                   
                </ol>
            </nav>          
        </main>
      </div>   
      );
    }
  }
  

export default Megalith;