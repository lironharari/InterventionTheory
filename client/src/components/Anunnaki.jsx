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

class Anunnaki extends Component {
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
      category : 'Anunnaki' 
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
                <section id="abgal">                    
                    <h2>אבגל</h2>
                    <Loader photos={photos} />
                    <ImageGallery photos={commonScript.filter(photos,"Abgal")}></ImageGallery>
                </section>                
                <section id="tree-of-life">
                    <h2>עץ החיים</h2>
                    <Loader photos={photos} />
                    <ImageGallery photos={commonScript.filter(photos,"TreeOfLife")}></ImageGallery>
                </section>        
                <section id="misc">
                    <h2>שונות</h2>
                    <ImageGallery photos={commonScript.filter(photos,"Misc")}></ImageGallery>
                </section>                                                                                    
            </div>
            <nav className="section-nav">
                <ol>                                                              
                    <li><a href="#abgal">אבגל</a></li>
                    <li><a href="#tree-of-life">עץ החיים</a></li>                                   
                    <li><a href="#misc">שונות</a></li>               
                </ol>
            </nav>
        </main>
      </div>   
      );
    }
  }
  

export default Anunnaki;