import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import ScrollUpButton from "react-scroll-up-button";

class CylinderSeals extends Component {
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
      let csTreeOfLife = [];      
      let csMisc = [];
      let csNibiruPull = [];
      
      csTreeOfLife =  commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos.filter(function (photo) { return photo.subcategory === "TreeOfLife";})))      
      csMisc =  commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos.filter(function (photo) { return photo.subcategory === "Misc";})))      
      csNibiruPull =  commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos.filter(function (photo) { return photo.subcategory === "NibiruPull";})))      

      return (     
        <div className="siteContainer">            
        <ScrollUpButton />
        <main className="archive">
            <div className="section-content">                                               
                <h1>חותמות גליל</h1>
                <section id="Tree.Of.Life">
                    <h2>עץ החיים</h2>
                    <p>
                        <ImageGallery photos={csTreeOfLife}></ImageGallery>                      
                    </p>
                </section>               
                <section id="Misc">
                    <h2>שונות</h2>
                    <p>
                        <ImageGallery photos={csMisc}></ImageGallery>                      
                    </p>
                </section>  
                <section id="Nibiru.Pull">
                    <h2>משיכת ניבירו</h2>
                    <p>
                        <ImageGallery photos={csNibiruPull}></ImageGallery>                      
                    </p>
                </section>                                                   
            </div>
            <nav class="section-nav">
                <ol>                                                              
                    <li><a href="#Tree.Of.Life">עץ החיים</a></li>               
                    <li><a href="#Misc">שונות</a></li>
                    <li><a href="#Nibiru.Pull">משיכת ניבירו</a></li>                    
                </ol>
            </nav>
        </main>
      </div>   
      );
    }
  }
  

export default CylinderSeals;