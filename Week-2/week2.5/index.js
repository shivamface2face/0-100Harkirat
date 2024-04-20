const express=require("express");
const app=express();
const bodyParser = require('body-parser')
const port=3000;

app.use(bodyParser.json());


function sum(n){
    let ans=0;
    for(let i=0;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}

app.get("/",(req,res)=>{
    const n=req.query.n;
    const ans=sum(n);

    res.send("server is good to go "+ ans);
});


app.listen(port,(req,res)=>{
    console.log(`server is running at {port}`)
});