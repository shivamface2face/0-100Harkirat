console.log("hii");
// callback function

 function Squr(n){
    return n*n;
 }
 function cub(n){
    return n*n*n;
 }


 function SurSum(a,b){
    let ans1=Squr(a);
    let ans2=Squr(b);
    return ans1+ans2;
 }

 console.log(SurSum(1,2));


 function sumCal(a,b,fun){
    console.log(fun);
    let ans1=fun(a);
    let ans2=fun(b);
    return ans1+ans2;
 }


 console.log(sumCal(2,3,cub));