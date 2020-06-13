const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssetSchema = new Schema(
    { 
      id: Number,   
      name: String,          
      content: String
    },
    { timestamps: true }
  );
  


const Asset = mongoose.model('Asset', AssetSchema);


module.exports = Asset;



