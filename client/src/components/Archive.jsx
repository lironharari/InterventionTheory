import React from 'react';
import Gallery from './Gallery';
import archive from './data/archive.json';
import axios from 'axios';
import Scrollspy from 'react-scrollspy'
import MobileDrawer from './MobileDrawer';

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
        const sections = page.sections.map( ( section,index ) => {
            return <section key={index} id={section.id}><Gallery photos={photos} subcategory={section.subcategory} header={section.text} /></section>
        }); 
        const nav = page.sections.map( ( section, index ) => {
          return <li key={index}><a href={`#${ section.id }`}>{section.text}</a></li>
        }); 
        const items = page.sections.map(( section ) => ( section.id ));

      return (    
        <div className="site-container">
          <main className="archive">                                                                                                        
            <div className="section-content"> 
                <header>
                    <h1>{page.caption}</h1>
                    <p>{page.description}</p>
                </header>              
                {sections}              
            </div>
            <nav className="section-nav">                 
                <Scrollspy items={ items } currentClassName="active">{nav}</Scrollspy>                  
            </nav>
            <MobileDrawer nav={page.sections} />
          </main>              
      </div>          
        );
    }
  }

export default Archive;