
let str="hello world";

// length 

function getLength(str){
    return str.length;
}
console.log(getLength(str));


// indexOf

 function getIndex(str,inp){
    return str.indexOf(inp);
 }

 let ans=getIndex(str,"world");
 console.log(ans);

 // lastIdexOf

 const str2 = "Hello world, welcome to the world.";
 
 function getLastIndex(str,inp){
    return str.lastIndexOf(inp);
 }
 let an=getLastIndex(str2,"world");
 console.log(an);


 // slice 

 function getSlice(str,start,end){
  return str.slice(start,end);
 }

  console.log(getSlice(str2,1,4));


  // substr

  function getSubStr(str,start,end){
   return str.substring(start,end);
  }

  console.log(getSubStr(str2,1,4));



   // replace 

    function getReplace(str,inp,rep){
    return str.replace(inp,rep);
    }

    console.log(getReplace(str,"hello","js"));


    // split
// it chnage it array 
    const str3 = "apple,banana,orange";
   function getSplit(str,inp){
  return str.split(inp);
   }
    console.log(getSplit(str3," "))


    // trim

    function getTrim(str){
      return str.trim();
    }

    console.log(getTrim(str3));


    // toUpperCase
function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");