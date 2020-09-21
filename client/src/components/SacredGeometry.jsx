import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';
import Gallery from './Gallery';

class SacredGeometry extends Component {
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
      category : 'SacredGeometry' 
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
        <div className="site-container">            
        <main className="archive">
            <div className="section-content">                                                                                           
                <header>
                  <h1>גאומטריה קדושה</h1>                  
                  <p>
                  רשת מעגלים חופפים הידועים כמבנה היסודי של המרחב. פרח החיים מכילה את קוביית מטטרון ואת כל הצורות הגיאומטריות הקיימות.                  
                  </p>
                </header>                 
                <section id="metatrons-cube">
                    <Gallery photos={photos} subcategory="MetatronsCube" header="קוביית מטטרון" />                    
                </section>    
                <section id="vesica-piscis">
                    <Gallery photos={photos} subcategory="VesicaPiscis" header="ווסאיקה פייסיס" />
                </section>                  
                <section id="triquetra">
                    <Gallery photos={photos} subcategory="Triquetra" header="טריקטרה" />
                </section>
                <section id="seed-of-life">
                    <Gallery photos={photos} subcategory="SeedOfLife" header="זרע החיים" />
                </section>   
                <section id="six-petal-rosette">
                    <Gallery photos={photos} subcategory="SixPetalRosette" header="ששת עלי כותרת" />
                </section>                
                <section id="flower-of-life">
                    <Gallery photos={photos} subcategory="FlowerOfLife" header="פרח החיים" />
                </section>            
                <section id="guardian-lions">
                    <Gallery photos={photos} subcategory="GuardianLions" header="האריות המגינים" />
                </section>                                                                                                                                                                                      
            </div>
            <nav className="section-nav">
                <ol>                                                                                               
                    <li><a href="#top">קוביית מטטרון</a></li>                                    
                    <li><a href="#vesica-piscis">ווסאיקה פייסיס</a></li>                    
                    <li><a href="#triquetra">טריקטרה</a></li>
                    <li><a href="#seed-of-life">זרע החיים</a></li>
                    <li><a href="#six-petal-rosette">ששת עלי כותרת</a></li>
                    <li><a href="#flower-of-life">פרח החיים</a></li>
                    <li><a href="#guardian-lions">האריות המגינים</a></li>                   
                </ol>
            </nav>          
        </main>
      </div>   
      );
    }
  }
  

export default SacredGeometry;