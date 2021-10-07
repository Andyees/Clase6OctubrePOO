"use strict";
//Parte 1 - Declarar variables con tipo
let spacecraftName = 'Determination';
let speedMph = 17500;
let kilomitersToMars = 225000000;
let kilometersToTheMoon = 384400;
let milesPerKilometer = 0.621;
let milesToMars = kilomitersToMars * milesPerKilometer;
let hoursToMars = milesToMars / speedMph;
let daysToMars = hoursToMars / 24;
console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);
function getDaysToLocation(kilometersAway) {
    let milesAway = kilometersAway * milesPerKilometer;
    let hours = milesAway / speedMph;
    return hours / 24;
}
let time = getDaysToLocation(10000000);
console.log(time);
class Spacecraft {
    constructor(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway) {
        let milesAway = kilometersAway * this.milesPerKilometer;
        let hoursToMars = milesAway / this.speedMph;
        return hoursToMars / 24;
    }
}
let Nave1 = new Spacecraft("Nave1", 2500);
let Nave2 = new Spacecraft("Nave2", 5500);
let tiemponave1 = Nave1.getDaysToLocation(5000000);
let tiemponave2 = Nave2.getDaysToLocation(5000000);
console.log("Nave  1 se tarda " + tiemponave1 + "dias" + " Nave2 se tarda " + tiemponave2 + " dias");
