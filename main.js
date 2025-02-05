import { Car} from './car.js';
import { Road} from './road.js';
import { Controls} from './controls.js';

const canvas = document.getElementById("myCanvas");
canvas.width=200;

const road=new Road(canvas.width/2,canvas.width*0.8)
const ctx=canvas.getContext("2d");
const car=new Car(100,100,30,50);


animate();
function animate(){
    car.update();
    canvas.height=window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}