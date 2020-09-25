import React, { useState } from "react";
import ReactPhotoGallery from "react-photo-gallery";
import Lightbox from 'react-image-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ImageGallery({ photos }) {
    const [photoIndex,setPhotoIndex] = useState(0);
    const [isOpen,setIsOpen] = useState(false);            
  
    const imageRenderer = ({key,index,photo}) => {      
      const handleOnClick = e => {
        setIsOpen(true);
        setPhotoIndex(index);
      };        
      return (
            <LazyLoadImage                                      
                    key={key}       
                    alt={photo.title}
                    className="galleryImage"
                    onClick={handleOnClick} 
                    src={photo.src}
                    srcSet={photo.srcSet}
                    sizes={photo.sizes}
                    width={photo.width}
                    height={photo.height}                    
                    title={photo.title}                                        
                    caption={photo.description}                                        
               />
      );
    };
  
  return (
    <div className="galleryContainer">  
      <ReactPhotoGallery renderImage={imageRenderer} photos={photos}  />                                                             
      {isOpen && (
          <Lightbox            
            imageCaption={photos[photoIndex].caption}            
            mainSrc={photos[photoIndex].src}            
            nextSrc={photos[(photoIndex + 1) % photos.length].src}            
            prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].src}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + photos.length - 1) % photos.length)              
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % photos.length)                            
            }
          />
        )}
  </div>
  );
} 