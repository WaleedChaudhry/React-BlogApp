const http=require('http');
const fs =require('fs');
const _=require('lodash');

const server=http.createServer((req,res)=>{

    //lodash
    const num=_.random(0,20);
    console.log(num);
    const greet=_.once(()=>{
    console.log('Hello world');
    })
    greet();
    //set header
    res.setHeader('Content-Type','text/html');
    //routing
    let path='./views/'
    switch (req.url)
    {
        case '/':
            
            path +='index.html'
            res.statusCode=200;
            break;
        case '/about':
           
            path +='about.html'
            res.statusCode=200;
            break;
        case '/about-me':
           
            res.statusCode=301;
            res.setHeader('Location','/about');
            break;
        default:
        
            path +='404.html' 
            res.statusCode=404; 
            break; 
    }
    //set an html file
    fs.readFile(path,(error,data)=>{
      if(error){
        console.log(error);
        res.end();
      }else{
        res.write(data);
        res.end();
      }
    });
   
})


server.listen(3003,'localhost',()=>{

    console.log('Listen from port 3003');
})