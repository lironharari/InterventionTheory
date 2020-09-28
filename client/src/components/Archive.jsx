import React from 'react';
import Gallery from './Gallery';
import archive from './data/archive.json';
import axios from 'axios';

class Archive extends React.Component {  
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
            category : this.props.name
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
        const page = archive.find(page => page.name === this.props.name);     

      return (    
        <div className="site-container">
        <main className="archive">                                                                                                        
        <div className="section-content"> 
            <header>
                <h1>{page.caption}</h1>
                <p>{page.description}</p>
              </header>              

            {
                page.sections.map( ( section,index ) => {
                    return <section key={index} id={section.id}><Gallery photos={photos} subcategory={section.subcategory} header={section.header} /></section>
                }) 
            }              
        </div>
          <nav className="section-nav">
              <ol>                                                              
                  {
                    page.sections.map( ( section, index ) => {
                        return <li key={index}><a href={`#${section.id}`}>{section.header}</a></li>
                    }) 
                }                  
              </ol>
          </nav>
      </main>              
      </div>          
        );
    }
  }

export default Archive;