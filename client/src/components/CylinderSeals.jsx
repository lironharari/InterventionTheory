import React, { Component } from 'react';
import axios from 'axios';
import Gallery from './Gallery';

class CylinderSeals extends Component {
  constructor(props) {
    super(props);        
    this.state = {
      photos: []
    };   
  }  
componentDidMount() {    
  this.getImages();
}

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
      <div className="site-container">
        <main className="archive">             
            <div className="section-content">                                                                               
                <header>
                  <h1>חותמות גליל</h1>
                  <p>
                    חותמות גליל או אמנות מקודשת אשר נוצרה על ידי תרבות בעלת יכולות טכנולוגיות מתקדמות.
                  </p>
                </header>                
                <section id="tree-of-life">                      
                    <Gallery photos={photos} subcategory="TreeOfLife" header="עץ החיים" />
                </section>               
                <section id="winged-chamber">
                    <Gallery photos={photos} subcategory="WingedChamber" header="תא מכונף" />
                </section> 
                <section id="flying-ring">
                    <Gallery photos={photos} subcategory="FlyingRing" header="טבעת מעופפת" />
                </section>  
                <section id="violence">
                    <Gallery photos={photos} subcategory="Violence" header="תרבות אלימה" />
                </section>                                                                      
                <section id="misc">
                    <Gallery photos={photos} subcategory="Misc" header="שונות"/>
                </section>                                                      
            </div>
            <nav className="section-nav">
                <ol>                                                              
                    <li><a href="#top">עץ החיים</a></li>                                                       
                    <li><a href="#winged-chamber">תא מכונף</a></li>
                    <li><a href="#flying-ring">טבעת מעופפת</a></li>
                    <li><a href="#violence">תרבות אלימה</a></li>
                    <li><a href="#misc">שונות</a></li>
                </ol>
            </nav>          
        </main>
        </div>
      );
    }
  }
  

export default CylinderSeals;