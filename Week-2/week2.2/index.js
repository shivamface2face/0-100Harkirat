const express=require("express");
const bodyParser = require('body-parser')
const port=3000;
const app=express();
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send("heyy");

})


app.listen(port,()=>{
    res.send("app is workinh in 3000 port")
});