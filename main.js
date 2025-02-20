import { Car} from './car.js';
import { Road} from './road.js';
import { Controls} from './controls.js';

const canvas = document.getElementById("myCanvas");
canvas.width=200;

const road=new Road(canvas.width/2,canvas.width)
const ctx=canvas.getContext("2d");
const car=new Car(road.getlaneCenter(3),100,30,50);


animate();
function animate(){
    car.update();
    canvas.height=window.innerHeight;
    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7);
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}