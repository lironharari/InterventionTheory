import React from 'react';
import * as commonScript from '../script/common';
import ImageGallery from './ImageGallery';
import { CircularProgress } from '@material-ui/core';
const { isEmpty } = require('lodash');

const Gallery = React.memo( props => (
    <>   
        {
            props.header ? <h2>{props.header}</h2>: null
        }     
        {            
            !isEmpty(props.photos) ? 
            <ImageGallery photos={commonScript.filter(props.photos,props.subcategory)}></ImageGallery> : 
            <div className="spinner"><CircularProgress /></div>
        }
    </>    
    )) ;      

export default Gallery