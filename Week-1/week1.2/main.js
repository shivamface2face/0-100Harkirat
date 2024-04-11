console.log("hii");
var a=1;
console.log(a);

let fname="shivam";
// let age=24;
let isworking=true;

console.log("name of emp "+fname);

if(isworking==true){
    console.log(fname);
};


for(let i=0;i<=100;i++){
    console.log(i);
}


let PersonArray=["cvm","singh","shivam"];
console.log(PersonArray);


let age=[1,23,4,12,67];

for(let i=0;i<age.length;i++){
    if(age[i]%2==0){
        console.log(age[i]);
    }
}

let sm=age[0];

 for(let i=0;i<age.length;i++){
    if(age[i]<sm){
        sm=age[i];
    }
   
 }
 console.log(sm);



 const allUser=[
    {
        fname:"shivam",
        gender:"male"
    },{
        fname:"raman",
        gender:"male"
    },{
        fname:"priya",
        gender:"female"
    }
   
 ]


 for(let i=0;i<allUser.length;i++){
    if(allUser[i]["gender"] =="male"){
        console.log(allUser[i]["fname"]);
    }
 }




 // function


  function FindSum(a,b){
    return a+b;
  }

  console.log(FindSum(4,5));


  // call Back


  function sum(n1,n2,funCall){
    let result=n1+n2;
    funCall(result);
  }

  function displayResult(data)
  {
    console.log("your result " +data);
  }

  function displayResultPassive(data)
  {
    console.log("your sum result is" +data);
  }

  const ans=sum(2,3,displayResult);


  function calCulArt(a,b,arthFuncn){
    const ans=arthFuncn(a,b);
    return ans;
  }

  function sum(a,b){
    return a+b;
  }

  const ans1=calCulArt(1,2,sum);
  console.log(ans1);