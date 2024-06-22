/*
    Abstraction: Focuses on hiding the complexity of the system by exposing only the necessary parts to the user. 
    It is about creating a simplified model that represents the essence of an object.

    Encapsulation: Focuses on hiding the internal state and behavior of an object by restricting access to certain components. 
    It is about bundling data and methods that manipulate the data within a class and providing controlled access to them.

    In summary, abstraction is about hiding the complexity and showing the essential features, 
    while encapsulation is about protecting the internal state of an object by restricting access and bundling data with the methods that operate on the data.
*/

/* The code defines abstract class HomeAppliances with subclasses Microwave and WashingMachine that
implement TurnOn and TurnOff methods, each initialized with a brand name and demonstrating their
functionality. */


abstract class HomeAppliances
{
    /* The `abstract class HomeAppliances` serves as a blueprint for other classes to inherit from. It
contains a private property `_brand_name` to store the brand name of the home appliance, a
constructor to initialize the brand name, abstract methods `TurnOn()` and `TurnOff()` that must be
implemented by subclasses, and a method `GetBrandName()` to retrieve and display the brand name. */

  private _brand_name:string

  constructor(brand_name:string)
  {
    this._brand_name = brand_name
  }

  /* The lines `abstract TurnOn():void` and `abstract TurnOff():void` within the abstract class
  `HomeAppliances` are defining abstract methods. 
  Abstract methods are methods that must be implemented by subclasses or child classes
  */

  abstract TurnOn():void
  abstract TurnOff():void

  GetBrandName()
  {
    console.log("Brand Name : ",this._brand_name)
  }
}

/* The Microwave class extends the HomeAppliances class and implemented abstract methods turn on and turn off of parent class*/
class Microwave extends HomeAppliances
{
  constructor(brand_name:string)
  {
    super(brand_name)
  }

  TurnOn()
  {
    console.log("Microwave turn on")
  }

  TurnOff()
  {
    console.log("Microwave turn off")
  }
}

/* The WashingMachine class extends the HomeAppliances class and implemented abstract methods turn on and turn off of parent class */
class WashingMachine extends HomeAppliances
{
  constructor(brand_name:string)
  {
    super(brand_name)
  }

  TurnOn()
  {
    console.log("WashingMachine turn on")
  }

  TurnOff()
  {
    console.log("WashingMachine turn off")
  }
}

let a = new Microwave("LG")
a.GetBrandName()
a.TurnOn()

let b = new WashingMachine("sony")
b.GetBrandName()
b.TurnOn()

//=================================Abstraction through Interface======================================

/* The `interface IHomeAppliances` is defining a contract that specifies the structure that any class
implementing it must follow. In this case, the interface requires implementing classes to have the
following properties and methods: */

interface IHomeAppliances{
    brand_name:string
    TurnOn():void
    TurnOff():void
    getBrandName():string
}

/* The class `refrigerator` implements the `IHomeAppliances` interface, which requires it to have a
`brand_name` property and implement the `TurnOn()`, `TurnOff()`, and `getBrandName()` methods. The
`refrigerator` class can be used to create instances of home appliance with methods to turn it on, turn
it off, and get its brand name. */

class refrigerator implements IHomeAppliances{

    /**
     * The `refrigerator` class constructor takes a `brand_name` parameter and initializes the `brand_name` property of the class.
     *  brand_name - The brand name of the refrigerator.
     */
    brand_name: string;
    constructor(brand_name:string){
        this.brand_name = brand_name
    }

    TurnOn(): void {
        console.log("Refrigerator turned on")
    }

    TurnOff(): void {
        console.log("Refrigerator turned off")
    }

    getBrandName():string{
        return `Brand : ${this.brand_name}`
    }
}

let m:refrigerator = new refrigerator("LG")
console.log(m.getBrandName())
m.TurnOn()