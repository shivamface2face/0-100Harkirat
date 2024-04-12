class Animal{
    constructor(name,legs,speak){
        this.name=name;
        this.legs=legs;
        this.speak=speak;
    }

    // it will not require object
    static myType(){
        console.log("my type is animal")
    }

    speak(){
        console.log("hi there "+ this.speak);
    }
}

let dog =new Animal("dog",4,"bhow");
let cat =new Animal("mow",4,"mow");
// cat.speak();
console.log(dog);