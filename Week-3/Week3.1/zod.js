 import {zod } from("zod");


function validate(arr){
    const schema=zod.arr(zod.number());
    const response=schema.safeParse(arr);
    console.log(response);
};

validate([1,2,3]);