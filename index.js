import { getResistorOhms } from './resistor.js';


const color0element = document.getElementById("color0");
const color1element = document.getElementById("color1");
const color2element = document.getElementById("color2");
const color3element = document.getElementById("color3");

let color0 = 'red';
let color1 = 'green';
let color2 = 'violet';
let color3 = 'gold';


color0element.addEventListener('click', function(e) {
    document.querySelector("#b0").className ="";
    color0 = e.target.innerHTML;
    document.querySelector("#b0").classList.add(color0);
    document.querySelector("#b0").classList.add("band");
    calculate();
});

color1element.addEventListener('click', function(e) {
    document.querySelector("#b1").className ="";
    color1 = e.target.innerHTML;
    document.querySelector("#b1").classList.add(color1);
    document.querySelector("#b1").classList.add("band");
    calculate();
});

color2element.addEventListener('click', function(e) {
    document.querySelector("#b2").className ="";
    color2 = e.target.innerHTML;
    document.querySelector("#b2").classList.add(color2);
    document.querySelector("#b2").classList.add("band");
    calculate();
});

color3element.addEventListener('click', function(e) {
    document.querySelector("#b3").className ="";
    color3 = e.target.innerHTML;
    document.querySelector("#b3").classList.add(color3);
    document.querySelector("#b3").classList.add("band");
    calculate();
});

function calculate(){
    let example =  {
        color1: color0,
        color2: color1,
        multiplier: color2,
        tolerance: color3
      };
 
    let answer = getResistorOhms(example);
 
    console.log('answer is: ',answer);

    document.getElementById('answer').innerText = answer;
}
