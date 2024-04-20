const express=require("express");
const app=express();
const bodyParser = require('body-parser')
const port=3000;
app.use(bodyParser.json());
app.use(express.json());


const users=[ {
      name:"jhon",
      kidneys:[{
            healthy:false
        }]
     
}]



app.get("/",(req,res)=>{
   const jhonKidneys=users[0].kidneys;
   const noOfKidneys=jhonKidneys.length;
   let noOfHelathyKidneys=0;
   for(let i=0;i<jhonKidneys.length;i++){
      if(jhonKidneys[i].healthy){
        noOfHelathyKidneys=noOfHelathyKidneys+1;
      }
   }

   const noOfUnhelthyKidneys=noOfKidneys-noOfHelathyKidneys;
   res.json({
    noOfKidneys,
    noOfHelathyKidneys,
    noOfUnhelthyKidneys
   })

});


app.post("/",(req,res)=>{
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })

    res.json({
        msg:"done"
    })
})


app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({
        msg:"done"
    })
})


app.delete("/",(req,res)=>{
    const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].isHealthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
  users[0].kidneys=newKidneys;
    res.json({
        mag:"done"
    })
})








app.listen(port,(req,res)=>{
    console.log(`server is running at 3000`)
});