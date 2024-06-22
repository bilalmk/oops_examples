// Simple Animal Class

/*
class Animal {
    name:string = "Dog"
}

let a:Animal = new Animal();
console.log(a.name);
a.name="Cat"
console.log(a.name);
*/

//=====================================

// Simple Animal class with more properties

/*
class Animal {
    name:string = "Dog"
    color:string = "Black"
    age:number = 2
}
let a:Animal = new Animal();
console.log(a.name);
console.log(a.color);
console.log(a.age);
console.log(a)
*/

//=====================================

// simple class with properties and method

/*
class Animal {
    type:string = "Dog"
    name_new:string = "Shair Khan"
    color:string = "Black"
    age:number = 2

    MakeNoice(){
        console.log(`${this.name_new} can make noice`);
    }
}


let a:Animal = new Animal();
a.type="Dog"
a.MakeNoice()
*/

//=====================================

// Simple class with more properties and methods

/*
class Animal {
    type:string = "Dog"
    name_new:string = "Shair Khan"
    color:string = "Black"
    age:number = 2

    constructor(c_type:string, c_name:string, c_age:number)
    {
        this.type = c_type
        this.name_new = c_name
        this.age = c_age
    }

    MakeNoice(){
        console.log(`${this.name_new} can make noice`);
    }

    Walk(){
        console.log(`${this.type} can Walking`);
    }

}

let a:Animal = new Animal("Dog","Tiger",3);
console.log(a.name_new)
a.age=2
console.log(a.age)
a.Walk()
*/