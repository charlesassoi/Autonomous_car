const { JSDOM } = require("jsdom");

// Simuler un DOM virtuel
const { document } = new JSDOM('<!DOCTYPE html><html><body><div id="grid"></div></body></html>').window;


const canvas = document.getElementById("myCanvas");
canvas.height=window.innerHeight;
canvas.width=200;
const ctx=canvas.getContext("2d");
const car=new Car(100,100,30,50);
car.draw(ctx);