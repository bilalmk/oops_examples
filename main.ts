// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
//   walk() {
//     console.log("Walking...");
//   }
// }

// class Dog extends Animal {
//   constructor(name: string) {
//     super(name);
//   }

//   woof() {
//     console.log(`Woof Woof`);
//   }
// }

// let d1 = new Dog("Tommy");
// console.log(d1.name);


//====================polymorphism=========
//  Method overload
//  Method Override

// function test(input:number):void
// function test(input:string):void
// function test(input:any):void
// {
//   console.log(input)
// }

// test(2)

// 

// Method Overriding

// class Electronics
// {
//   TurnOn()
//   {
//     console.log("device turn on")
//   }
// }

// class Microwave extends Electronics
// {
//   TurnOn()
//   {
//     console.log("Microwave turnon")
//   }
// }

// let a = new Electronics()
// a.TurnOn()

// let b = new Microwave()
// b.TurnOn()

/*
  class car{
    name
    brand
    drive()
    {
      //start
      //gear
      //clutch
      //speed
    }
    class automatic extends car
    {
      drive()
      {
        //start
        //speed
      }
    }

    automatic_drive()
    {
      //start
      //speed
    }
  }
*/


// class Animal{
//   name:string
//   color:string
//   age:number
  
//   constructor(name:string,color:string,age:number)
//   {
//     this.name = name
//     this.color = color
//     this.age = age
//   }

//   MakeNoice()
//   {
//     console.log("Animal Can make noice")
//   }
// }

// class Dog extends Animal
// {
//   constructor(name:string,color:string,age:number)
//   {
//     super(name,color,age)
//   }

//   MakeNoice(): void {
//     console.log(this.name,"is barking")
//   }
// }

// class Cat extends Animal
// {
//   constructor(name:string,color:string,age:number)
//   {
//     super(name,color,age)
//   }

//   MakeNoice(): void {
//     console.log(this.name,"is meowing")
//   }
// }

// let a = new Animal("Dog","white",4)
// a.MakeNoice()

// let d:Dog = new Dog("Tiger","White",4)
// d.MakeNoice()

// let c:Cat = new Cat("Tom","white",2)
// c.MakeNoice()

//======================Encapsulation========
//Public
//Private
//Protected

// class Animal{
//   name:string
//   color:string
//   age:number
//   private _price:number
  
//   constructor(name:string,color:string,age:number,price:number)
//   {
//     this.name = name
//     this.color = color
//     this.age = age
//     this._price = price
//   }

//   get price()
//   {
//     return this._price
//   }

//   set price(a)
//   {
//     if(a<=0)
//       console.log("please provide valid price")
//     else
//       this._price = a
//   }

//   MakeNoice()
//   {
//     console.log("Animal Can make noice")
//   }
// }

// class Dog extends Animal
// {
//   constructor(name:string,color:string,age:number,price:number)
//   {
//     super(name,color,age,price)
//   }
// }

// let d:Dog = new Dog("Tiger","white",4,200)
// console.log(d.name)
// d.name="Dog"
// d.price = 180
// console.log(d.name,"Price is",d.price)


//==================================
abstract class HomeAppliances
{
  private _brand_name:string

  constructor(brand_name:string)
  {
    this._brand_name = brand_name
  }

  abstract TurnOn():void
  abstract TurnOff():void

  GetBrandName()
  {
    console.log("Brand Name : ",this._brand_name)
  }
}

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
