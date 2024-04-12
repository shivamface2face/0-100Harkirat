let arr=[1,2,3,4,5];

console.log(arr.push(2));
console.log(arr.pop(0));
console.log(arr.shift(9));
console.log(arr.unshift(8));

let arr2=[6,7,8,9];
let result =arr.concat(arr2);
console.log(result);



function forEachExmaple(arr){
console.log(arr);
 arr.forEach(function(iteam,index){
   console.log(iteam,index);
 });
}

forEachExmaple(arr);





// map filter find sort



