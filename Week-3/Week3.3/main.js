const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchima = zod.string().email();
const passwordSchima = zod.string().min(6);

function signJwt(username, password) {
  const userResponse = emailSchima.safeParse(username);
  const passResponse = passwordSchima.safeParse(password);

  if (!userResponse.success || !passResponse.success) {
    return null;
  }

  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword,
  );
  return signature;
}

function verifyJwt(token) {
     try{
       jwt.verify(token,jwtPassword);
       return true;
     }catch(e){
       
     }
    return false;
  }
  
  
  function decodeJwt(token) {
   const decode=jwt.decode(token);
    if(decode){
     return true;
    }else{
      return false;
    }
  }


let ans = signJwt("cvmsdsh@email.com", "asdasdasdas");

console.log(ans);
let ans2=decodeJwt("eyJhbGciOiJILmNvbSIsImlhdCI6MTcxNDI4NjY0MH0.sColYHgw7jnCNNKmlgnXZyjDAfih2gWiV-nncLA0bWQ");
console.log(ans2);
let ans3=verifyJwt("eyJhbGciOiJIUbSIsImlhdCI6MTcxNDI4NjY0MH0.sColYHgw7jnCNNKmlgnXZyjDAfih2gWiV-nncLA0bWQ");
console.log(ans3);
