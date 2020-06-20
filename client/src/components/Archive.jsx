import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import ScrollUpButton from "react-scroll-up-button";

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
      category : ['CylinderSeal','Nephilim','Megaliths'] 
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
      console.log(photos);
      let elongatedSkullsPhotos = [];
      let cylinderSealsPhotos = [];
      let megalithPhotos = [];

      elongatedSkullsPhotos =  commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos.filter(function (photo) { return photo.category === "Nephilim";})))      
      cylinderSealsPhotos =  commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos.filter(function (photo) { return photo.category === "CylinderSeal";})))      
      megalithPhotos =  commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos.filter(function (photo) { return photo.category === "Megaliths";})))      

      return (     
        <div className="siteContainer">            
        <ScrollUpButton />
        <main className="archive">
            <div className="section-content">                                               
                <section id="cylinderSeals">
                    <h2>חותמות גליל</h2>
                    <p>
                        <ImageGallery photos={cylinderSealsPhotos}></ImageGallery>                      
                    </p>
                </section>                 
                <section id="megaliths">
                    <h2>מבנים מגליתים</h2>
                    <p>
                        <ImageGallery photos={megalithPhotos}></ImageGallery>                      
                    </p>
                </section>                                                         
                <section id="elongatedSkulls">
                    <h2>גולגלות מאורכות</h2>
                    <p>                    
                      <ImageGallery photos={elongatedSkullsPhotos}></ImageGallery>                      
                    </p>
                </section>                            
            </div>
            <nav class="section-nav">
                <ol>                                                              
                    <li><a href="#cylinderSeals">חותמות גליל</a></li>               
                    <li><a href="#megaliths">מבנים מגליתים</a></li>                   
                    <li><a href="#elongatedSkulls">גולגלות מאורכות</a></li>
                </ol>
            </nav>
        </main>
      </div>   
      );
    }
  }
  

export default Archive;