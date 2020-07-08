import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import ScrollUpButton from "react-scroll-up-button";
import Skeleton from "react-loading-skeleton";

function Loader(props) {           
  return  <div className="skeleton-container">
            {props.photos.length === 0 && <Skeleton count={6} />}
          </div>;  
}

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

      return (     
        <div className="siteContainer">            
        <ScrollUpButton />
        <main className="archive">
            <div className="section-content">                                                               
                <section id="sacsayhuaman">
                    <h2>סאסקיואמן</h2>
                        <Loader photos={photos} />
                        <ImageGallery photos={commonScript.filter(photos,"Sacsayhuaman")}></ImageGallery>
                </section>               
                <section id="egypt">
                    <h2>מצרים</h2>
                        <Loader photos={photos} />
                        <ImageGallery photos={commonScript.filter(photos,"Egypt")}></ImageGallery>
                </section>
                <section id="baalbek">
                    <h2>בעלבק</h2>
                        <ImageGallery photos={commonScript.filter(photos,"Baalbek")}></ImageGallery>
                </section>                                                               
            </div>
            <nav className="section-nav">
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