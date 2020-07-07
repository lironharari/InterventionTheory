import React from 'react';

class Reference extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        };        
      }
    render() {        
        const {id} = this.state;
      return (
            <sup 
                key={id} 
                id={`cite_ref-${id}`} 
                className="reference">
                    <a href={`#cite_note-${id}`}>[{id}]</a>
            </sup>         
        );
    }
  }

export default Reference;