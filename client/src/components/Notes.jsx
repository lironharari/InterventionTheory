import React from 'react';
import notes from './data/notes.json';

function Note(props) {           
    return <li id={`cite_note-${props.id}`} key={props.id}>          
                <a className="cite_note" href={`#cite_ref-${props.id}`}>^</a>
                <cite>
                    {props.text}
                    <span className="space"></span>(
                    {
                        props.links.map(function(link,index,arr){
                            let lastIndex = arr.length - 1;
                            if (index === lastIndex)
                                return <a key={index} rel="noopener noreferrer" target="_blank" href={link.href}>{link.text}</a>;
                            else
                                return <span key={index} className="comma"><a rel="noopener noreferrer" target="_blank" href={link.href}>{link.text}</a></span>;
                        })
                    }
                ).
                </cite>
            </li>;
}

class Notes extends React.Component {  
    render() {                
      return (            
                notes.map( ( {id, text, links} ) => {
                    return <Note key={id} id={id} text={text} links={links}></Note>
                })                            
        );
    }
  }

export default Notes;