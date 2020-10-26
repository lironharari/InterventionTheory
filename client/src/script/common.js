export function sortByRank(list) {
  return list.sort((a, b) => b.rank - a.rank );      
}

export function filter(photos,subcategory) {
  return adjustGalleryPhotos(sortByRank(photos.filter(function (photo) { return photo.subcategory === subcategory;})))
}


export function scrollUp() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera  
}

export function scrollUpInit() {
  const scrollUpbutton = document.getElementById("scrollUp");  

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollUpbutton.style.display = "block";
    } else {
      scrollUpbutton.style.display = "none";
    }
  }
}


export function adjustGalleryPhotos(photos) {
    const galleryPhotos = [];
    const defaultWidth = 3;
    const defaultHeight = 2;
    
    photos.forEach(function (photo) {             
        const isCustomSize = photo.width > 0 && photo.height > 0;        
        galleryPhotos.push( { 
                                src:`/images/${photo.src}`, 
                                srcSet: [
                                  `/images/thumbnails/${photo.src} 500w`,
                                  `/images/thumbnails/${photo.src} 800w`,
                                  `/images/thumbnails/${photo.src} 1024w`,                                  
                                  `/images/thumbnails/${photo.src} 1600w`,
                                ],
                                sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],                                
                                width: isCustomSize ? photo.width : defaultWidth, 
                                height: isCustomSize ? photo.height : defaultHeight, 
                                alt:"",
                                title: photo.title,
                                caption: photo.description
                              });                                
    });
    return galleryPhotos;
  }
