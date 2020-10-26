import React from 'react';
import * as commonScript from '../script/common';

class ScrollUp extends React.Component {  
    componentDidMount() { 
        commonScript.scrollUpInit();        
    }
    scrollUp = ( ) => {
        commonScript.scrollUp();        
    }
    render() {  
      return (
            <button id="scrollUp" onClick={this.scrollUp}>
                <img src="../images/circled-up-2.png" alt="חזרה לראש הדף" title="חזרה לראש הדף" />
            </button>
        );
    }
  }

export default ScrollUp;