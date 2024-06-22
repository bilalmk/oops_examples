/* The class `Car` defines a car object with properties like name, model, and color, and a method
`Drive` that simulates the steps to drive a car. */

/*
    assuming this car can do only manual drive
*/

class Car {
    constructor(name, model, color) {
        this.name = name;
        this.model = model;
        this.color = color;
    }
    Drive() {
        console.log("Engine start");
        console.log("Press clutch");
        console.log("Shift gear");
        console.log("Release clutch");
        console.log("Increase Speed");
        console.log("car start running with manual driving");
    }
}
export default Car;
