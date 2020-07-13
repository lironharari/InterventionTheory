import React from 'react';
import Skeleton from "react-loading-skeleton";

class Loader extends React.Component {      
    render() {                

      return (            
            <div className="skeleton-container">
                {this.props.photos.length === 0 && <Skeleton count={6} />}
            </div>
        );
    }
  }

export default Loader;