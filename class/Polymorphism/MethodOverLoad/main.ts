//Following is the simple example of function overloading

function test(input:number):void
function test(input:string):void
function test(input:any):void
{
  console.log(input)
}

test(2)

//=================================================

/*
    Method overloading is perform in a single class and Method overriding is perform on parent-child classes using inharitance
*/

/*
    Method overloading is a feature in TypeScript where a class can have multiple methods with the same name,
    but different parameter types and numbers. This allows developers to call a method with the appropriate 
    parameters based on the context of the call.
*/

/*
    In method overloading, single implementation is used in conjunction with multiple declarations.
    it means one object having many forms
*/

/* The LCD class defines a method to display different messages based on the input type, such as
"HDMI", "CABLE", or "USB". 
    We created multiple defination of Screen Method but single implementation to achieve the method overloading
*/

class LCD{
    Screen(input:"HDMI"):void
    Screen(input:"CABLE"):void
    Screen(input:"USB"):void

    Screen(input:any):void
    {
        if(input=="HDMI")
            console.log("working on computer")
        else if(input=="CABLE")
            console.log("working on TV")
        else if(input=="USB")
            console.log("working on mobile")
    }

}

let lcd:LCD = new LCD()
lcd.Screen("HDMI")
lcd.Screen("CABLE")
lcd.Screen("USB")

//===============================


/* This TypeScript class defines an Animal with properties for name, color, and age, 
along with methods for making noise and walking different distances at specified speeds. 
here we are overloading the walk method
*/
class Animal {
    name_new:string = "Shair Khan"
    color:string = "Black"
    age:number = 2

    constructor(c_name:string, c_age:number)
    {
        this.name_new = c_name
        this.age = c_age
    }

    making_noice(){
        console.log(`${this.name_new} is making noice`);
    }

  /*
    In method overloading, single implementation is used in conjunction with multiple declarations.
    it means one object having many forms
  */

  /* This code snippet is an example of method overloading in TypeScript. 
  In the `Animal` class, the `walk` method is overloaded with different sets of parameters. 
  */

    walk():void
    walk(distance:number):void
    walk(distance:number,speed:number):void
    walk(distance?:number,speed?:number){
        if(distance && speed)
            console.log(`${this.name_new} is walking ${distance} kilometer at the speed of ${speed} kilometer per hour`)
        else if(distance)
            console.log(`${this.name_new} is walking ${distance} kilometer`)
        else
            console.log(`${this.name_new} is walking`);
    }
}


let a:Animal = new Animal("Tiger", 3); 
a.walk()
a.walk(10)
a.walk(10, 20)

//===========================================================================

// Anothor example of method overloading

class Calculator {
    add(a:number, b:number):number
    add(a:string, b:string):string
    add(a:any, b:any):any{
        return a + b
    }
}