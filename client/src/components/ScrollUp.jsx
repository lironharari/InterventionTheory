import React from 'react';
import * as commonScript from '../script/common';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';

class ScrollUp extends React.Component {  
    componentDidMount() { 
        commonScript.scrollUpInit();        
    }
    scrollUp = ( ) => {
        commonScript.scrollUp();        
    }
    render() {  
      return (
            <button id="scrollUp" onClick={this.scrollUp} title="חזרה לראש העמוד">
                <ArrowUpwardRoundedIcon style={{ fontSize: 45, color:"rgba(0,0,0,.7)" }}/>
            </button>
        );
    }
  }

export default ScrollUp;