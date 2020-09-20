import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import { CircularProgress } from '@material-ui/core';
const { isEmpty } = require('lodash');

class Megalith extends Component {
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
        <main className="archive">
            <div className="section-content">                                                                                           
                <header>
                  <h1>מגלית</h1>
                  <p>
                    מבנים מגליתים הם עדות לטכנולוגיה מתקדמת ולתרבות על אנושית אשר פעלה במצרים ובאמריקה הדרומית.                    
                  </p>
                </header>                 
                <section id="gobekliTepe">
                    <h2>גובקלי טפה, טורקיה</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"GobekliTepe")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>               
                <section id="baalbek">
                    <h2>בעלבק, לבנון</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"Baalbek")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>                
                <section id="sacsayhuaman">
                    <h2>סאסקיואמן, פרו</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"Sacsayhuaman")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>               
                <section id="cusco">
                    <h2>קוסקו, פרו</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"Cusco")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>                          
                <section id="egypt">
                    <h2>מצרים</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"Egypt")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>
                <section id="sphinx">
                    <h2>ספינקס, מצרים</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"Sphinx")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
                </section>  
                <section id="obelisk">
                    <h2>האובליסק הלא מוגמר, מצרים</h2>
                    {!isEmpty(photos) ? <ImageGallery photos={commonScript.filter(photos,"Obelisk")}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
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