/* 
Method overRiding is the process of redefining a method defined in the base class in the child class with the same signature
but different implementation. This allows the child class to modify or extend the behavior of the method defined in the base class.

Method overriding is achieved on parent-child classes relations using Inharitance

*/

/* The code defines a TypeScript class hierarchy where a Microwave class inherits from an Electronics
class and overrides the TurnOn method to display specific messages for each class. */
class Electronis{
    TurnOn():void{
        console.log("Electronis turned on")
    }

    TurnOff():void{
        console.log("Electronis turned off")
    }
}

class Refrigerator extends Electronis{
    TrunOn(): void {
        console.log("Refrigerator turned on")
        console.log("Refrigerator is cooling")
    }

    TurnOff(): void {
        console.log("Refrigerator turned off")
    }
}

class MicroWave extends Electronis{
    TrunOn(): void {
        console.log("MicroWave turned on")
        console.log("MicroWave is heating")
    }

    TurnOff(): void {
        console.log("MicroWave turned off")
    }
}

class WashingMachine extends Electronis{
    TrunOn(): void {
        console.log("WashingMachine turned on")
        console.log("WashingMachine is washing")
    }

    TurnOff(): void {
        console.log("WashingMachine turned off")
    }
}


let p:Electronis = new  Electronis()
p.TurnOn()

let r:Refrigerator = new  Refrigerator()
r.TrunOn()

let m:MicroWave = new  MicroWave()
m.TrunOn()

let w:WashingMachine = new  WashingMachine()
w.TrunOn()


//=============================================
//Another Example of method overriding


/* The code defines classes for Animal, Dog, and Cat with properties and methods for making noise
specific to each type of animal. */

/*
    Here we are riding the MakeNoice method of base class in child classes name Dog and Cat
    both child classes have same method name and same signature but different implementation
    and display sparate message for each class.
*/

class Animal{
  name:string
  color:string
  age:number
  
  constructor(name:string,color:string,age:number)
  {
    this.name = name
    this.color = color
    this.age = age
  }

  MakeNoice()
  {
    console.log("Animal Can make noice")
  }
}

class Dog extends Animal
{
    constructor(name:string,color:string,age:number)
    {
        super(name,color,age)
    }

    Sniff()
    {
        console.log(this.name, "can sniff")    
    }

    MakeNoice(): void 
    {
        console.log(this.name,"is barking")
    }
}

class Cat extends Animal
{
    constructor(name:string,color:string,age:number)
    {
        super(name,color,age)
    }

    Climb()
    {
        console.log(this.name, "can climb")
    }

    MakeNoice(): void {
        console.log(this.name,"is meowing")
    }
}

class Cow extends Animal{
    constructor(name:string,color:string,age:number)
    {
        super(name,color,age)
    }

    ProduceMilk()
    {
        console.log(this.name, "can produce milk")
    } 

    MakeNoice(): void {
        console.log(this.name, "can mooing")
    }
      
}

let a = new Animal("Dog","white",4)
a.MakeNoice()

let d:Dog = new Dog("Tiger","White",4)
d.MakeNoice()

let c:Cat = new Cat("Tom","white",2)
c.MakeNoice()

let cow:Cow = new Cow("Bravo","White",2)
cow.MakeNoice()

//==============================================

//Another Example

/* The statement `import Car from "./car.js"` is importing the default export from the "car.js" file
into the current TypeScript file. This allows you to use the functionalities or classes exported
from the "car.js" file in the current file. In this case, we are importing a class
named `Car` from the "car.js" file to use it in the current file. */

import Car from "./car.js"

/* 
The code defines a class AutoMaticCar that extends Car and includes a Drive method. 
The company provided us with an already created Car class for manual drive cars. Now, 
the company has started manufacturing automatic cars and wants to include automatic car functionality in its coding. 
We have to create a class to achieve this task.

We created a new class that extends the already existing Car class. 
The new class inherits all the properties and methods of the parent class, which means the automatic car has the parent class's Drive method, 
intended for manual drive cars. We have to override the parent class method to include the automatic drive functionality.

Now, any company can use the AutoMaticCar class to create instances of automatic cars.
*/
class AutoMaticCar extends Car{
    Drive(){
        console.log("This is an automatic car")
        console.log("=========================")
        console.log("Engine start")
        console.log("Increase Speed")
        console.log("car start running")
    }
}

let obj:Car = new Car("Corolla", 2022, "White")
obj.Drive()

let autoObj:AutoMaticCar = new AutoMaticCar("Honda", 2022, "Black")
autoObj.Drive()