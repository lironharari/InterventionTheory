import React from 'react';
import notes from './data/notes.json';

class Reference extends React.Component {  
    render() {  
      const note = notes.find(note => note.id === this.props.id);      
      
      return (
            <sup 
                id={`ref-${note.name}`} 
                className="reference">                    
                    <a className="cite_ref" key={this.props.id} href={`#note-${note.name}`}>[{this.props.id}]</a>                    
            </sup>         
        );
    }
  }

export default Reference;