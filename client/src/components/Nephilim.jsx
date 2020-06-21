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
    commonScript.enableScroll();   
    this.getImages(); 
}    
componentWillUnmount() {}

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
      let csCylinderSeals = [];      
      let csEgypt = [];
      let csElongatedSkulls = [];
      
      csCylinderSeals =  commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos.filter(function (photo) { return photo.subcategory === "CylinderSeals";})))      
      csEgypt =  commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos.filter(function (photo) { return photo.subcategory === "Egypt";})))      
      csElongatedSkulls =  commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos.filter(function (photo) { return photo.subcategory === "ElongatedSkulls";})))      

      return (     
        <div className="siteContainer">            
        <ScrollUpButton />
        <main className="archive">
            <div className="section-content">                                               
                <h1>נפילים</h1>
                <section id="Elongated.Skulls">
                    <h2>גולגולות מאורכות</h2>
                    <p>
                        <ImageGallery photos={csElongatedSkulls}></ImageGallery>                      
                    </p>
                </section>               
                <section id="Egypt">
                    <h2>מצרים</h2>
                    <p>
                        <ImageGallery photos={csEgypt}></ImageGallery>                      
                    </p>
                </section>  
                <section id="Cylinder.Seals">
                    <h2>חותמות גליל</h2>
                    <p>
                        <ImageGallery photos={csCylinderSeals}></ImageGallery>                      
                    </p>
                </section>                                                   
            </div>
            <nav class="section-nav">
                <ol>                                                              
                    <li><a href="#Elongated.Skulls">גולגולות מאורכות</a></li>               
                    <li><a href="#Egypt">מצרים</a></li>
                    <li><a href="#Cylinder.Seals">חותמות גליל</a></li>                    
                </ol>
            </nav>
        </main>
      </div>   
      );
    }
  }
  

export default Nephilim;