import React from 'react';
import notes from './data/notes.json';

function Note(props) {           
    return <li id={`note-${props.name}`}>          
                <a className="cite_note" title="לקפוץ מעלה" href={`#ref-${props.name}`}>^</a>
                <cite>
                    {props.info}
                    <span className="space" />-<span className="space" />
                    <a rel="noopener noreferrer" target="_blank" href={props.href}>{props.text}</a>
                </cite>
            </li>;
}

class Notes extends React.Component {  
    render() {                
      return (            
                notes.map( ( {id, name, info, href, text}, index ) => {
                    return <Note key={index} name={name} id={id} info={info} href={href} text={text}></Note>
                })                            
        );
    }
  }

export default Notes;