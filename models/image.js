const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
    { 
      id: Number,   
      path: String,          
      category: String,
      subCategory: String,
      rank: Number
    },
    { timestamps: true }
  );
  


const Image = mongoose.model('Image', ImageSchema);


module.exports = Image;



