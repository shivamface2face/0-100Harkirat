const express=require("express");

const app=express();

app.use(express.json());

function userMiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    if(username!="cvm" && password!="pass"){
        res.status(403).json({
            msg:"invalid user"
        });
       
    }else{
        next();
    }
};


function kidneyMiddleware(req,res,next){
    const kidneyId=req.query.kidneyId;
    if(kidneyId!=1 && kidneyId!=2){
        res.status(411).json({
            msg:"invalid user"
        });
        
    }else{
        next();
    }
 
}



app.get("/helth",userMiddleware,kidneyMiddleware,(req,res)=>{
     res.send("you are helthy");
})

app.put("/replace" ,userMiddleware,kidneyMiddleware,(req,res)=>{
  
    res.send("you are fine ")
})






app.listen(3000);