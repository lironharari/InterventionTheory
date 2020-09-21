import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';
import Gallery from './Gallery';

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
        <div className="site-container">                    
        <main className="archive">                      
            <div className="section-content">                                                                                               
                <header>
                  <h1>נפילים</h1>
                  <p>
                    הגולגלות המאורכות זהות לדימוי המצרי של האלים למחצה.                    
                    הנפילים בספר בראשית הם עדות נוספת לקיומם ומקורם.
                  </p>
                </header>                
                <section id="elongated-skulls">                    
                    <Gallery photos={photos} subcategory="ElongatedSkulls" header="גולגולות מאורכות" />
                </section>               
                <section id="egypt">
                    <Gallery photos={photos} subcategory="Egypt" header="מלכות מצרים" />
                </section>  
                <section id="cylinder-seals">
                    <Gallery photos={photos} subcategory="CylinderSeals" header="חותמות גליל" />
                </section>                                                   
            </div>
            <nav class="section-nav">
                <ol>                                                              
                    <li><a href="#top">גולגולות מאורכות</a></li>               
                    <li><a href="#egypt">מלכות מצרים</a></li>
                    <li><a href="#cylinder-seals">חותמות גליל</a></li>                    
                </ol>
            </nav>
        </main>
      </div>   
      );
    }
  }
  

export default Nephilim;