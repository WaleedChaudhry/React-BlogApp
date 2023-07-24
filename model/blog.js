const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//this is schema
const blogschema= new Schema({

    title:{
        type: String,
        required: true

    },
    snippet:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true

    }
},{timestamps:true});
//now we have to make model which is going to map
//this is our model
const Blog=mongoose.model('Blog',blogschema);
//in this we export our model
module.exports=Blog;