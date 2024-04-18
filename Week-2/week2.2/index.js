const express=require("express");
const bodyParser = require('body-parser')
const port=3000;
const app=express();
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send("heyy");

})

app.post("/asd",(req,res)=>{
     console.log(req.headers["Connection"]);
     res.send("hey post request");
     console.log(req.body);



})


app.listen(port,(req,res)=>{
 console.log("app is working in 3000 port");
});