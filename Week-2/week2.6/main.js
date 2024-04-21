const arr=[1,2,3,4,5];

// map function

 function mapTransform(n){
    return n*2;
 }


 const mans=arr.map(mapTransform);
 console.log(mans);

const ans=arr.map((n)=>{
    return n*2;
});

console.log(ans);



// filter function

 
function ffans(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
};

const ansf=arr.filter(ffans);
console.log(ansf);





  const fans=arr.filter((n)=>{
    if(n%2==0){
        return true;
    }else{
        return false;
    }
  });

  console.log(fans)