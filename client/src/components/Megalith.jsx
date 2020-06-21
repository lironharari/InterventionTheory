import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import ScrollUpButton from "react-scroll-up-button";

class Megalith extends Component {
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
      let csSacsayhuaman = [];      
      let csEgypt = [];      
      let csBaalbek = [];      
      
        csBaalbek =  commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos.filter(function (photo) { return photo.subcategory === "Baalbek";})))      
        csSacsayhuaman =  commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos.filter(function (photo) { return photo.subcategory === "Sacsayhuaman";})))      
        csEgypt =  commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos.filter(function (photo) { return photo.subcategory === "Egypt";})))      

      return (     
        <div className="siteContainer">            
        <ScrollUpButton />
        <main className="archive">
            <div className="section-content">                                               
                <h1>מגלית</h1>                
                <section id="sacsayhuaman">
                    <h2>סאסקיואמן</h2>
                    <p>
                        <ImageGallery photos={csSacsayhuaman}></ImageGallery>                      
                    </p>
                </section>               
                <section id="egypt">
                    <h2>מצרים</h2>
                    <p>
                        <ImageGallery photos={csEgypt}></ImageGallery>                      
                    </p>
                </section>
                <section id="baalbek">
                    <h2>בעלבק</h2>
                    <p>
                        <ImageGallery photos={csBaalbek}></ImageGallery>                      
                    </p>
                </section>                                                               
            </div>
            <nav class="section-nav">
                <ol>                                                              
                    <li><a href="#sacsayhuaman">סאסקיואמן</a></li>               
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