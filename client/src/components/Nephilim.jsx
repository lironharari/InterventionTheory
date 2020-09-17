import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';
import ImageGallery from './ImageGallery';
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
                    {!isEmpty(photos) ? <h2>גולגולות מאורכות</h2>: null}
                    <ImageGallery photos={commonScript.filter(photos,"ElongatedSkulls")}></ImageGallery>                      
                </section>               
                <section id="egypt">
                    {!isEmpty(photos) ? <h2>מצרים</h2>: null}
                    <ImageGallery photos={commonScript.filter(photos,"Egypt")}></ImageGallery>
                </section>  
                <section id="cylinder-seals">
                    {!isEmpty(photos) ? <h2>חותמות גליל</h2>: null}
                    <ImageGallery photos={commonScript.filter(photos,"CylinderSeals")}></ImageGallery>
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