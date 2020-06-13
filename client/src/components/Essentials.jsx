import React, { Component } from 'react';
import * as commonScript from '../script/common';

class Essentials extends Component {
  componentDidMount() { 
    commonScript.enableScroll();   
}

    render() {

      return (                                                
        <div className="siteContainer">            
          <main>
              <div className="section-content"> 
                  <section id="creation">
                      <h2>בריאתנות</h2>
                      <p>…</p>
                  </section>
                  <section id="evolution">
                      <h2>אבולוציה</h2>
                      <p>…</p>
                  </section>
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
                  <section id="elongatedSkulls">
                      <h2>גולגלות מאורכות</h2>
                      <p>…</p>
                  </section>
              </div>
              <nav class="section-nav">
                  <ol>
                      <li><a href="#creation">בריאתנות</a></li>
                      <li><a href="#evolution">אבולוציה</a></li>
                      <li><a href="#sumer">שומר</a></li>
                      <li><a href="#prehistory">פרהיסטוריה</a></li>
                      <li><a href="#history">היסטוריה</a></li>                                          
                      <li><a href="#elongatedSkulls">גולגלות מאורכות</a></li>
                  </ol>
              </nav>
          </main>
        </div>               
      );
    }
  }
  

export default Essentials;