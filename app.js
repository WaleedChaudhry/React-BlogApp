const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const { result } = require('lodash');
const blogRoutes=require('./Routes/blogroutes');
//express app
const app=express();


//mongodblink
const dbURL='mongodb+srv://waleed:test123@nodetut.1hh6rhp.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURL,{ useNewUrlParser: true,}).
then((result)=> console.log('Connected')).
catch((err)=> console.log(err));

//ejs
app.set('view engine', 'ejs');
//third party middleware
app.use(morgan('dev'));
//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
//setting port
app.listen(3000);
//Blog Module middleware
app.get('/',(req,res)=>{

    res.redirect('/blogs');
    // res.send("<h1>Hello Waleed</h1>");
    // res.render('index',{title: 'Home',blogs});
});
app.get('/about',(req,res)=>{

   // res.send("<h1>Hello Waleed</h1>");
    res.render('about',{title: 'About'});
});

app.use(blogRoutes);

//404 code
app.use((req,res)=>{
    res.status(404).render('404',{title: '404'});
   
});

