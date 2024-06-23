class Car{
    name:string
    model:number
    color:string

    constructor(name:string, model:number, color:string)
    {
        this.name = name
        this.model = model
        this.color = color
    }

    Drive()
    {
        console.log("This is a manual car")
        console.log("=========================")
        console.log("Engine start")
        console.log("Press clutch")
        console.log("Shift gear")
        console.log("Release clutch")
        console.log("Increase Speed")
        console.log("car start running")
    }
}

export default Car