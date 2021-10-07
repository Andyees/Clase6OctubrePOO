"use strict";
class Carro {
    constructor(año, color, gasolina, model) {
        this.año = año;
        this.color = color;
        this.gasolina = gasolina;
        this.model = model;
    }
    Encender() {
    }
    Acelerar() {
        this.gasolina--;
    }
    Parar() {
    }
    Getgasolina() {
        return this.gasolina;
    }
    presentacarro() {
        console.log("Este carro es de color " + this.color + "y es del año " + this.año);
    }
}
class Mazda extends Carro {
    abrirTecho() {
    }
}
class Ferarri extends Carro {
    ActivarNitro() {
    }
}
let mazda2 = new Mazda(2018, "verde", 11, "Mazda FX");
let ferrari2 = new Ferarri(1998, "negro", 12, "Ferrari Black");
function getModel(car) {
    if (car.año < 1999)
        console.log(car.model + " Carro antiguo");
    else {
        console.log(car.model);
    }
}
getModel(ferrari2);
getModel(mazda2);
