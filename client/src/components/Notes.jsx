import React from 'react';
import notes from './data/notes.json';

function Note(props) {           
    return <li id={`cite_note-${props.id}`} key={props.id}>          
                <a className="cite_note" title="לקפוץ למעלה" href={`#cite_ref-${props.id}`}>^</a>
                <cite>
                    {props.info}
                    <span className="space" />
                    -
                    <span className="space" />
                    <a key={props.id} rel="noopener noreferrer" target="_blank" href={props.href}>{props.text}</a>
                </cite>
            </li>;
}

class Notes extends React.Component {  
    render() {                
      return (            
                notes.map( ( {id, info, href, text} ) => {
                    return <Note key={id} id={id} info={info} href={href} text={text}></Note>
                })                            
        );
    }
  }

export default Notes;