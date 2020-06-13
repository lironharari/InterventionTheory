const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
    { 
      id: Number,   
      src: String,    
      title: String,
      description: String,
      category: String,
      subcategory: String,      
      rank: Number,
      width: Number,
      height: Number      
    },
    { timestamps: true }
  );
  


const Image = mongoose.model('Image', ImageSchema);


module.exports = Image;



