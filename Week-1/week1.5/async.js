
// promise
function kiratAsy(){
    let p=new Promise(function(resolve){
        resolve("hi there");
    });
    return p;
}

function main(){
    kiratAsy().then(function(value){
        console.log(value);
    })
}

main();


// async

function kiratAsy(){
    let p=new Promise(function(resolve){
        resolve("hi there");
    });
    return p;
}


async function main(){
    const value=await kiratAsy();
    console.log(value);
}

main();


