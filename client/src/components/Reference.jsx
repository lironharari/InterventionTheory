import React from 'react';

class Reference extends React.Component {  
    render() {        
      return (
            <sup 
                key={this.props.id}                 
                id={`cite_ref-${this.props.id}`} 
                className="reference">                    
                    <a className="cite_ref" key={this.props.id} href={`#cite_note-${this.props.id}`}>[{this.props.id}]</a>                    
            </sup>         
        );
    }
  }

export default Reference;