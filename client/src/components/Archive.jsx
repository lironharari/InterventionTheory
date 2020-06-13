import React, { Component } from 'react';
import * as commonScript from '../script/common';
import axios from 'axios';

class Archive extends Component {
  constructor(props) {
    super(props);        
    this.state = {
      photos: []
    };   
  }
  componentDidMount() { 
    commonScript.enableScroll();   
    // this.fetchArchivePhotos(); 
}    
componentWillUnmount() {}

fetchArchivePhotos = () => {
  // axios({
  //   url: '/api/searchImage',
  //   method: 'POST', 
  //   data: {
  //     category : 'Nephilim' 
  //   }
  // })
  // .then((response) => {            
  //   const { images } = response.data;
  //   console.log(images);                
  // })
  // .catch((error) => console.log(error))      

  axios.get('/api/archivePhotos')
    .then((response) => {
      const { photos } = response.data;            
      this.setState({ photos: commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos)) })
    })
    .catch(() => alert('Error fetching photos'));
}     
    render() {
      const { photos } = this.state; 
      return (     
        <div className="siteContainer">            
        <main>
            <div className="section-content">                                               
                <section id="elongatedSkulls">
                    <h2>גולגלות מאורכות</h2>
                    <p>…</p>
                </section>            
                <section id="cylinderSeals">
                    <h2>חותמות גליל</h2>
                    <p>…</p>
                </section>                            
            </div>
            <nav class="section-nav">
                <ol>                                          
                    <li><a href="#elongatedSkulls">גולגלות מאורכות</a></li>
                    <li><a href="#cylinderSeals">חותמות גליל</a></li>
                </ol>
            </nav>
        </main>
      </div>   
      );
    }
  }
  

export default Archive;