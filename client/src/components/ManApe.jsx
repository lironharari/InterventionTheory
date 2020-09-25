import React, { Component } from 'react';
import axios from 'axios';
import Gallery from './Gallery';

class ManApe extends Component {
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
      category : 'ManApe' 
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
                  <h1>אדם/קוף</h1>
                  <p>
                    ההבדלים בין האדם והקוף מעידים על טרנספורמציה ולא על אבולוציה הדרגתית.
                  </p>
                </header>                 
                <section id="physical">
                    <Gallery photos={photos} subcategory="Physical" header="הבדלים פיזיים" />
                </section>   
                <section id="genetics">
                    <Gallery photos={photos} subcategory="Genetics" header="הבדלים גנטיים" />
                </section>                                                                                              
            </div>
            <nav className="section-nav">
                <ol>                                                              
                    <li><a href="#top">הבדלים פיזיים</a></li>                                    
                    <li><a href="#genetics">הבדלים גנטיים</a></li>
                </ol>
            </nav>          
        </main>
      </div>   
      );
    }
  }
  

export default ManApe;