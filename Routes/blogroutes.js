
const express=require('express');
const router=express.Router();
const blogcontroller=require('../controllers/blogcontroller')

router.get('/blogs/create',blogcontroller.blog_create_get);
//sort in this is using time stamp for desendingorder
router.get('/blogs',blogcontroller.blog_index);
//show all blogs
router.post('/blogs',blogcontroller.blog_create_post);
//get blog by id
router.get('/blogs/:id', blogcontroller.blog_details);
//for deletion
router.delete('/blogs/:id', blogcontroller.blog_delete);

module.exports=router;


//Middleware
// router.use((req,res,next)=>{
//     console.log("New request made:");
//     console.log("host:",req.hostname);
//     console.log("Path:",req.path);
//     console.log("Method:",req.method);
//     next();
// })
//mongoose and mongo sandbox routes
// router.get('/add-blog',(req,res)=>{
// //making instance of blog
// const blog=new Blog({
//     title: 'new Blog 2',
//     snippet: 'About my new blog',
//     body: 'More about my new Blog'
// });
// //Now for saving our blog to database this is Asynchronous func
// blog.save().
// then((result)=>{
//    res.send(result);
// }).
// catch((error)=>{
//    console.log(error);
// })

// });
// //to get all blogs from the database
// router.get('/all-blogs',(req,res)=>{
//   Blog.find()
//   .then((result)=>{
//     res.send(result).
//     catch((error)=>{
//         console.log(error);
//     })
//   })
// });

// //for finding a single blog from database
// router.get('/single-blog',(req,res)=>{
//     Blog.findById('64846b1ce43f2bb5b4908049').
//     then((result)=>{
//         res.send(result);
//     }).
//     catch((error)=>{
//         console.log(error);
//     })
// })