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

      return (     
        <div className="siteContainer">                    
        <main className="archive">
            <div className="section-content">                                                               
                <section id="tree-of-life">
                    <h2>עץ החיים</h2>
                    <p>
                        <ImageGallery photos={commonScript.filter(photos,"TreeOfLife")}></ImageGallery>
                    </p>
                </section>               
                {/* <section id="nibiru-pull">
                    <h2>משיכת ניבירו</h2>
                    <p>
                        <ImageGallery photos={commonScript.filter(photos,"NibiruPull")}></ImageGallery>
                    </p>
                </section>                */}
                <section id="misc">
                    <h2>שונות</h2>
                    <p>
                        <ImageGallery photos={commonScript.filter(photos,"Misc")}></ImageGallery>
                    </p>
                </section>                                                      
            </div>
            <nav class="section-nav">
                <ol>                                                              
                    <li><a href="#tree-of-life">עץ החיים</a></li>                                   
                    {/* <li><a href="#nibiru-pull">משיכת ניבירו</a></li>                     */}
                    <li><a href="#misc">שונות</a></li>
                </ol>
            </nav>
            <ScrollUpButton />
        </main>
      </div>   
      );
    }
  }
  

export default CylinderSeals;