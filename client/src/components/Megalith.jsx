import React, { Component } from 'react';
import axios from 'axios';
import Gallery from './Gallery';

class Megalith extends Component {
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
        <div className="site-container">            
        <main className="archive">
            <div className="section-content">                                                                                           
                <header>
                  <h1>מגלית</h1>
                  <p>
                    מבנים מגליתים הם עדות לטכנולוגיה מתקדמת ולתרבות על אנושית אשר פעלה במצרים ובאמריקה הדרומית.                    
                  </p>
                </header>                 
                <section id="gobekliTepe">
                    <Gallery photos={photos} subcategory="GobekliTepe" header="גובקלי טפה, טורקיה" />
                </section>               
                <section id="baalbek">
                    <Gallery photos={photos} subcategory="Baalbek" header="בעלבק, לבנון"/>
                </section>                
                <section id="sacsayhuaman">
                    <Gallery photos={photos} subcategory="Sacsayhuaman" header="סאסקיואמן, פרו" />
                </section>               
                <section id="cusco">
                    <Gallery photos={photos} subcategory="Cusco" header="קוסקו, פרו" />
                </section>                          
                <section id="egypt">
                    <Gallery photos={photos} subcategory="Egypt" header="מצרים" />
                </section>
                <section id="sphinx">
                    <Gallery photos={photos} subcategory="Sphinx" header="ספינקס, מצרים"/>
                </section>  
                <section id="obelisk">
                    <Gallery photos={photos} subcategory="Obelisk" header="האובליסק הלא מוגמר, מצרים"/>
                </section>                                                       
            </div>
            <nav className="section-nav">
                <ol>                                                              
                    <li><a href="#top">גובקלי טפה</a></li>
                    <li><a href="#baalbek">בעלבק</a></li>                                   
                    <li><a href="#sacsayhuaman">סאסקיואמן</a></li>               
                    <li><a href="#cusco">קוסקו</a></li>
                    <li><a href="#egypt">מצרים</a></li>                                   
                    <li><a href="#sphinx">ספינקס</a></li>
                    <li><a href="#obelisk">אובליסק</a></li>                                      
                </ol>
            </nav>          
        </main>
      </div>   
      );
    }
  }
  

export default Megalith;