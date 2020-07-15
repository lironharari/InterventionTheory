import React from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component {
  
    render() {

      return (     
        <footer className="section-footer">                 
          <div className="home-bottom-social-icons">                                                                      
            <SocialIcon url="https://www.facebook.com/harariliron" target="_blank" />
            <SocialIcon url="https://www.youtube.com/watch?v=zoFTK9Mo0JM&list=PLbd-yCGYHip0TDXxb4NmKelBUQJ-odshp&index=2&t=0s" target="_blank"/>
          </div>
          <div className="copyright">
               <a href="mailto:lironharari@gmail.com" >לירון הררי</a> &#169;
          </div>             
        </footer>
      );
    }
  }
  

export default Footer;