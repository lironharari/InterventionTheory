import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';
import ImageGallery from './ImageGallery';

class Archive extends Component {
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
      category : ['CylinderSeal','Nephilim'] 
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
      let elongatedSkullsPhotos = [];
      let cylinderSealsPhotos = [];

      elongatedSkullsPhotos =  commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos.filter(function (photo) { return photo.category === "Nephilim";})))      
      cylinderSealsPhotos =  commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos.filter(function (photo) { return photo.category === "CylinderSeal";})))      

      return (     
        <div className="siteContainer">            
        <main>
            <div className="section-content">                                               
                <section id="elongatedSkulls">
                    <h2>גולגלות מאורכות</h2>
                    <p>                    
                      <ImageGallery photos={elongatedSkullsPhotos}></ImageGallery>                      
                    </p>
                </section>            
                <section id="cylinderSeals">
                    <h2>חותמות גליל</h2>
                    <p>
                        <ImageGallery photos={cylinderSealsPhotos}></ImageGallery>                      
                    </p>
                </section>                            
            </div>
            <nav class="section-nav">
                <ol>                                          
                    <li><a href="#elongatedSkulls">גולגלות מאורכות</a></li>
                    <li><a href="#cylinderSeals">חותמות גליל</a></li>
                </ol>
            </nav>
        </main>
      </div>   
      );
    }
  }
  

export default Archive;