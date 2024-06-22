

/* The class `Animal` defines properties and methods for an animal object with a name, color, age, and
behaviors like making noise and walking. */
class Animal {
 
    name_new:string = "Shair Khan"
    color:string = "Black"
    age:number = 2

    constructor(c_name:string, c_age:number)
    {
        this.name_new = c_name
        this.age = c_age
    }
    
    MakingNoice(){
        console.log(`${this.name_new} is making noice`);
    }

    Walk(){
        console.log(`${this.name_new} is walking`);
    }
}



/* The Dog class extends the Animal class and includes a job method for sniffing at the airport. */
class Dog extends Animal{
    constructor(c_name:string, c_age:number, c_color:string)
    {
        super(c_name, c_age)
        this.color = c_color
    }
    Job(){
        console.log(`${this.name_new} is doing sniffers job at airport`);
    }
}


/* The `Cat` class extends the `Animal` class and adds a `color` property and a `climb` method. */
class Cat extends Animal{
    constructor(c_name:string, c_age:number, c_color:string)
    {
        super(c_name, c_age)
        this.color = c_color
    }
    Climb(){
        console.log(`${this.name_new} can climb the tree`);
    }
}

let d:Dog = new Dog("Sharu", 3, "Black");
d.Job()
d.Walk()
d.MakingNoice()


let c:Cat = new Cat("Top", 3, "White");
c.Climb()
c.Walk()
c.MakingNoice()