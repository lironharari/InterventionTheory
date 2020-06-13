import React, { Component } from 'react';
import * as commonScript from '../script/common';

class Sumer extends Component {
  componentDidMount() { 
    commonScript.enableScroll();   
}  
    render() {

      return (     
        <div className="siteContainer">            
        <main>
            <div className="section-content"> 
                <section id="sumer">
                    <h3>שומר</h3>
                    <p>…</p>                    
                </section>
                <section id="prehistory">
                    <h3>פרהיסטוריה</h3>
                    <p>…</p>

                </section>
                <section id="history">
                    <h3>היסטוריה</h3>
                    <p>…</p>                    
                </section>                            
                <section id="firsts">
                    <h3>לראשונה</h3>
                    <p>…</p>
                </section>
            </div>
            <nav class="section-nav">
                <ol>
                    <li><a href="#sumer">שומר</a></li>
                    <li><a href="#prehistory">פרהיסטוריה</a></li>
                    <li><a href="#history">היסטוריה</a></li>                                        
                    <li><a href="#firsts">לראשונה</a></li>
                </ol>
            </nav>
        </main>
      </div>               
      );
    }
  }
  

export default Sumer;