/*
- means hiding data
- Wrapping code and objects to form a single unit is basically what encapsulation means.
- Encapsulation is a principle of OOP that enables the bundling of data and methods within a class, hiding the internal implementation details from the outside world
- Encapsulation in object-oriented programming refers to restricting unauthorized access and mutation of specific properties of an object
*/

/*

Access modifiers
- Public (By default)
- Private (Available only inside the class)
- Protected (Available in the superclass and derived classes, but not in the instance.)

*/


/* The class defines an Animal with properties like name, color, age, and price, along with a Dog
subclass that inherits from Animal and demonstrates getter and setter methods for the price
property. */

class Animal{
  name:string
  color:string
  age:number
  private _price:number
  
  constructor(name:string,color:string,age:number,price:number)
  {
    this.name = name
    this.color = color
    this.age = age
    this._price = price
  }

  get price()
  {
    return this._price
  }

  set price(a)
  {
    if(a<=0)
      console.log("please provide valid price")
    else
      this._price = a
  }

  MakeNoice()
  {
    console.log("Animal Can make noice")
  }
}

class Dog extends Animal
{
  constructor(name:string,color:string,age:number,price:number)
  {
    super(name,color,age,price)
  }
}

let d:Dog = new Dog("Tiger","white",4,200)
console.log(d.name)
d.name="Dog"
d.price = 180
console.log(d.name,"Price is",d.price)


//===================================
//Another Exampmle


/* The class `Car` simulates a car with fuel level and engine status, allowing actions such as starting
the engine, driving, and stopping the engine. */

class Car{
    private _fuel:number
    private _engineStart:boolean

    constructor(fuel:number, engineStart:boolean)
    {
        this._fuel = fuel
        this._engineStart = engineStart
    }

    get fuel():number{
        return this._fuel
    }

    /**
     * The `startEngine` function checks if there is enough fuel to start the engine and logs a message
     * accordingly.
     */
    startEngine(){
        if(this._fuel>0)
        {
            this._engineStart = true
            console.log("Engine started")
        }
        else
        {
            console.log("Can not start engine, no fuel")
        }
    }

    /**
     * The `drive` function in TypeScript decreases fuel by 10 units if the engine is started and there
     * is fuel, otherwise it prompts to start the engine.
     */
    drive(){
        if(this._engineStart && this._fuel>0)
        {
            this._fuel=this._fuel-10;
            console.log("Car is running")
        }
        else
        {
            console.log("Start the engine first")
        }
    }

    /**
     * The `stopEngine` function checks if the engine is running and stops it if it is, displaying the
     * current fuel level in the tank.
     */
    stopEngine()
    {
        if(this._engineStart)
        {
            this._engineStart = false
            console.log("engine stopped")
            console.log("current fuel in tank is",this._fuel)
        }
        else
            console.log("engine is already stopped")
    }
}

let car:Car = new Car(100, false)
car.startEngine()
car.drive()
car.drive()
car.drive()
car.stopEngine()