const express=require("express");

const app=express();

app.use(express.json());

app.get("/helth",(req,res)=>{
    const kidneyId=req.query.kidneyId;
    const username=req.headers.username;
    const password=req.headers.password;

    if(username!="cvm" && password!="pass"){
        res.status(403).json({
            msg:"invalid user"
        });
        return;
    };

    if(kidneyId!=1 && kidneyId!=2){
        res.status(411).json({
            msg:"invalid user"
        });
        return;
    };
 
     



    res.send("you are helthy");
})


app.listen(3000);