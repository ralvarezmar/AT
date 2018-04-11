'use strict'

function converttokm(vel){
  return (vel*3600/1000);
}

function converttomile(vel){
  return (vel*3600/1609.344);
}

let velocity;

velocity = 10;
console.log("M/s:" + velocity + " Millas por hora: " + converttomile(velocity) + " Km/h: " + converttokm(velocity) );


velocity = 50;
console.log("M/s:" + velocity + " Millas por hora: " + converttomile(velocity) + " Km/h: " + converttokm(velocity) );
