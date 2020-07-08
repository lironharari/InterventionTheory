import React from 'react';
import Skeleton from "react-loading-skeleton";

class Loader extends React.Component {  
    constructor(props) {
        super(props);        
        this.state = {
          photos: props.photos
        };   
      }
    componentDidMount() {}    
    componentWillUnmount() {}
    render() {                
        const { photos } = this.state;
        console.log(photos);
      return (            
            <div className="skeleton-container">
                {photos.length === 0 && <Skeleton count={6} />}
            </div>
        );
    }
  }

export default Loader;