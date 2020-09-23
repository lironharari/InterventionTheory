import React, { Component } from 'react';
import axios from 'axios';
import Gallery from './Gallery';

class Anunnaki extends Component {
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
        <div className="site-container">            
        <main className="archive">                                                                                                   
          <div className="section-content">              
              <header>
                  <h1>אנונקי</h1>
                  <p>
                    כיצד האנונקי תוארו במסופוטמיה?
                  </p>
                </header>              
              <section id="abgal">
                  <Gallery photos={photos} subcategory="Abgal" header="אבגל" />
              </section>                
              <section id="tree-of-life">
                  <Gallery photos={photos} subcategory="TreeOfLife" header="עץ החיים" />
              </section>        
              <section id="misc">
                  <Gallery photos={photos} subcategory="Misc" header="שונות" />
              </section>        
              </div>
            <nav className="section-nav">
                <ol>                                                              
                    <li><a href="#top">אבגל</a></li>
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