import React, { Component } from 'react';
import axios from 'axios';

const { isNull,isEmpty } = require('lodash');

class Manager extends Component {
  constructor(props) {
    super(props);        
    this.state = {
      photos: [],
      id: '',
      src: '',
      category: '',
      subcategory: '',
      width: 0,
      height: 0,
      rank: 0,
      title: '',
      description: '' 
    };   
  }
  componentDidMount() {     
    this.getAllImages();
}   

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });    
  };
  
  selectImage = (id) => {  
    const {photos} = this.state
    const photo = photos.find(photo => photo._id === id);
    
    this.setState({
      id: photo._id,
      src: photo.src,
      title: photo.title,
      description: photo.description,
      category: photo.category,
      subcategory: photo.subcategory,
      rank: photo.rank,
      width: photo.width,
      height: photo.height
    });     
  } 
  getAllImages = ( ) => {
    axios({
      url: '/api/getAllImages',
      method: 'POST'           
    })
    .then((response) => {            
      const { images } = response.data;        
      this.setState({ photos: images })  
    })
    .catch((error) => console.log(error))      
  } 
  
  updateImage = e => {
    e.preventDefault(); 
    const { id,src,category,subcategory,width,height,rank,title,description } = this.state;                     
    const update = { 
                      src:src,
                      category:category, 
                      subcategory:subcategory, 
                      width:width,
                      height:height,
                      rank:rank,
                      title:title,
                      description:description 
                    };

      axios({
        url: '/api/updatePhoto',
        method: 'POST', 
        data: {
          id,
          update : update          
        }
      })
      .then((response) => {        
        console.log(response.data);              
              
      })
      .catch((error) => console.log(error))                       
  };

  searchImage = e => {
    e.preventDefault(); 
    const { src } = this.state;                 
    
    axios({
      url: '/api/searchImage',
      method: 'POST', 
      data: {
        src : src 
      }
    })
    .then((response) => {            
      const { image } = response.data;
      
      if(!isNull(image)){
          this.setState({
            id: image._id,
            src: image.src,
            title:image.title,
            description:image.description,
            category:image.category,
            subcategory:image.subcategory,
            rank:image.rank,
            width:image.width,
            height:image.height
          });       
      }      
    })
    .catch((error) => console.log(error)) 
  };



  addPhoto = e => {
    e.preventDefault();
    
    const { src, category, subcategory, width, height, description, rank, title } = this.state;                     
    
    axios({
      url: '/addPhoto',
      method: 'POST',
      data: {
        src, category, subcategory, width, height, description, rank, title
      }
    })
      .then((res) => {        
        console.log("added photo",res);
      })
      .catch(() => alert('Failed adding photo'))
  };
  render() {
    const { photos } = this.state;       

    return (
      <div className="site-container manager">          
      <section>
           <label>
            Src:
              <input type="text" name="src" value={this.state.src} onChange={this.handleChange} />        
            </label>                    
            <label>
            Category:
              <input type="text" name="category" value={this.state.category} onChange={this.handleChange} />        
            </label>                
            <label>
            Subcategory:
              <input type="text" name="subcategory" value={this.state.subcategory} onChange={this.handleChange} />        
            </label>            
            <label>
            Rank:
              <input type="text" name="rank" value={this.state.rank} onChange={this.handleChange} />        
            </label>        
            <label>
            Title:
              <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />        
            </label>    
            <label>
              Description:
              <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />        
            </label>
            <label>
              Width:
              <input type="text" name="width" value={this.state.width} onChange={this.handleChange} />        
            </label>                  
            <label>
              Height:
              <input type="text" name="height" value={this.state.height} onChange={this.handleChange} />        
            </label>            
            <button onClick={this.searchImage}>search</button>
            <button onClick={this.updateImage}>update</button>
            <button onClick={this.addPhoto}>Add</button>
      </section>
      <section>
          <h2>Database</h2>                  
        {
            !isEmpty(photos) ? 
            photos.map( (photo,index) =>
              <li key={index} className="databasePhoto"> 
                  {photo.src}
                  <button value={photo._id} onClick={e => this.selectImage(e.target.value)}>select</button>
              </li>              
            ) : 
            null          
        }
      </section>    
    </div>
    );
  }
}

export default Manager;
