import React, { Component } from 'react';
import * as commonScript from '../script/common';

class Home extends Component {
  componentDidMount() { 
    commonScript.enableScroll();   
}  
    render() {

      return (     
        <div className="siteContainer">                    
        <main>
            <div className="section-content"> 
                <section id="intro">
                    <h2>מבוא</h2>
                    <p>…</p>
                </section>                        
                <section id="essentials">
                    <h2>עקרונות</h2>
                    <p>…</p>
                </section>            
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
                <section id="human">
                    <h3>אנושות</h3>
                    <p>…</p>
                </section>                                              
                <section id="elongatedSkulls">
                    <h2>גולגלות מאורכות</h2>
                    <p>…</p>
                </section>
                <section id="anunnaki">
                    <h2>ענונקי</h2>
                    <p>…</p>
                </section>   
                <section id="knowledge">
                    <h2>ידע מתקדם</h2>
                    <p>…</p>
                </section>   
                <section id="technology">
                    <h2>טכנולוגיה מתקדמת</h2>
                    <p>…</p>
                </section>                                                
            </div>
            <nav class="section-nav">
                <ol>
                    <li><a href="#intro">מבוא</a></li>
                    <li><a href="#essentials">עקרונות</a></li>
                    <li><a href="#creation">בריאתנות</a></li>
                    <li><a href="#evolution">אבולוציה</a></li>
                    <li><a href="#sumer">שומר</a></li>
                    <li><a href="#prehistory">פרהיסטוריה</a></li>
                    <li><a href="#history">היסטוריה</a></li>                                          
                    <li><a href="#human">יצירת האדם</a></li>                                          
                    <li><a href="#elongatedSkulls">גולגלות מאורכות</a></li>
                    <li><a href="#anunnaki">ענונקי</a></li>
                    <li><a href="#knowledge">ידע מתקדם</a></li>
                    <li><a href="#technology">טכנולוגיה מתקדמת</a></li>
                </ol>
            </nav>
        </main>
      </div>               
      );
    }
  }
  

export default Home;