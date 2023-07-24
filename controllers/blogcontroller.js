//blog-index , blog-details, blog_create_get, blog_create_post, blog_delete
const Blog=require('../model/blog');


const blog_index=(req,res)=>{
    Blog.find().sort({ createdAt: -1})
    .then((result)=>{
          res.render('blogs/index', {title : 'All Blogs',blogs : result})
    }).
    catch((err)=>{
       console.log(err)
    })
}
const blog_details=(req,res)=>{
    const id=req.params.id;
    Blog.findById(id).
    then(result=>{
        res.render('blogs/details',{blog :result,title:'Blog Details'})
    }).
    catch(err=>{
        res.render('blogs/404',{title: 'Blog not found'});
    })
}
const blog_create_get=(req,res)=>{

  res.render('blogs/create',{title: 'Create New Blog'});
}
const blog_create_post=(req,res)=>{
    const blog=new Blog(req.body);
    blog.save()
    .then((result)=>{ 
        //to return on blog pages
        res.redirect('/blogs')
    }).
    catch((err)=>{
        console.log(err);
    })
}
const blog_delete=(req,res)=>{
    const id=req.params.id;
    Blog.findByIdAndDelete(id).
    then(result=>{
        //inside this wev get a request from AJAX so we cannot do this in bacxkend we have to do this in frontend for this we convert it into json and return it back to details.ejs
        res.json({redirect:'/blogs'});
    }).
    catch(err=>{
      console.log(err);
    })
}

module.exports={
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_delete,
    blog_details
}