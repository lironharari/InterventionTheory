import React from 'react';
import notes from './data/notes.json';

class Reference extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        };        
      }
    render() {        
        const {id} = this.state;
        const note = notes.find(element => element.id === id);        

      return (
            <sup 
                key={id}                 
                id={`cite_ref-${id}`} 
                className="reference">                    
                    <a className="cite_ref" key={id} href={`#cite_note-${id}`}>[{id}]</a>                    
            </sup>         
        );
    }
  }

export default Reference;