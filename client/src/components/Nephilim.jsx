import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import { CircularProgress } from '@material-ui/core';
const { isEmpty } = require('lodash');

class Nephilim extends Component {
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
      category : 'Nephilim' 
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
                <section id="elongated-skulls">
                    <h2>גולגולות מאורכות</h2>                          
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"ElongatedSkulls")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>               
                <section id="egypt">
                    <h2>מצרים</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"Egypt")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>  
                <section id="cylinder-seals">
                    <h2>חותמות גליל</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"CylinderSeals")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>                                                   
            </div>
            <nav class="section-nav">
                <ol>                                                              
                    <li><a href="#top">גולגולות מאורכות</a></li>               
                    <li><a href="#egypt">מצרים</a></li>
                    <li><a href="#cylinder-seals">חותמות גליל</a></li>                    
                </ol>
            </nav>
        </main>
      </div>   
      );
    }
  }
  

export default Nephilim;