import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import ScrollUpButton from "react-scroll-up-button";

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
        {photos.length > 0 && (             
        <main className="archive">
            <div className="section-content">                                                               
                <section id="elongated-skulls">
                    <h2>גולגולות מאורכות</h2>
                        <ImageGallery photos={commonScript.filter(photos,"ElongatedSkulls")}></ImageGallery>                      
                </section>               
                <section id="egypt">
                    <h2>מצרים</h2>
                        <ImageGallery photos={commonScript.filter(photos,"Egypt")}></ImageGallery>
                </section>  
                <section id="cylinder-seals">
                    <h2>חותמות גליל</h2>
                        <ImageGallery photos={commonScript.filter(photos,"CylinderSeals")}></ImageGallery>
                </section>                                                   
            </div>
            <nav class="section-nav">
                <ol>                                                              
                    <li><a href="#elongated-skulls">גולגולות מאורכות</a></li>               
                    <li><a href="#egypt">מצרים</a></li>
                    <li><a href="#cylinder-seals">חותמות גליל</a></li>                    
                </ol>
            </nav>
            <ScrollUpButton />
        </main>
        )}
      </div>   
      );
    }
  }
  

export default Nephilim;