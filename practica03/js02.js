'use strict'

function converttokm(vel){
  return (vel*3600/1000);
}

function converttomile(vel){
  return (vel*3600/1609.344);
}



function convert(vel,unidad){
  switch (unidad) {
    case "mps":
      return (converttomile(vel) + " "+ unidad);
    case "m/s":
      return (vel + " "+ unidad);
    case "km/h":
      return (converttokm(vel) + " "+ unidad);
    case undefined:
      console.log("Error: argumento no declarado");
      break;
    default:
        console.log("Error: unidad no permitida");
        break;
  }
}

let velocity;

velocity = 10;
console.log("m/s:" + velocity + " " + convert(velocity,"mps"));

velocity = 50;
console.log("m/s:" + velocity + " " + convert(velocity,"m/s"));

velocity = 20;
console.log("m/s:" + velocity + " " + convert(velocity,"km/h"));

velocity = 10;
console.log("m/s:" + velocity + " " + convert(velocity));

velocity = 10;
console.log("m/s:" + velocity + " " + convert(velocity,"m/h"));
