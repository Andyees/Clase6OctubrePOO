//Parte 1 - Declarar variables con tipo
let spacecraftName: string = 'Determination';
let speedMph: number = 17500;
let kilomitersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;




let milesToMars=kilomitersToMars * milesPerKilometer;
let hoursToMars=milesToMars / speedMph;
let daysToMars=hoursToMars / 24;




console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);


function getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = kilometersAway * milesPerKilometer;
    let hours: number = milesAway / speedMph;
    return hours / 24;
 }

 let time=getDaysToLocation(10000000)
 console.log(time)


 class Spacecraft {
    private milesPerKilometer: number = 0.621;
    name: string;
    private speedMph: number;
 
    constructor(name: string, speedMph: number) {
       this.name = name;
       this.speedMph = speedMph;
    }
 
    getDaysToLocation(kilometersAway: number): number {
       let milesAway: number = kilometersAway * this.milesPerKilometer;
       let hoursToMars: number = milesAway / this.speedMph;
       return hoursToMars / 24;
    }
 }

let Nave1= new Spacecraft("Nave1",2500)
let Nave2= new Spacecraft("Nave2",5500)

let tiemponave1= Nave1.getDaysToLocation(5000000)

let tiemponave2=Nave2.getDaysToLocation(5000000)

console.log("Nave  1 se tarda "+tiemponave1+"dias"+ " Nave2 se tarda "+tiemponave2 +" dias")


