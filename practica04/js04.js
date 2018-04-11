'use strict'

function converttokm(vel) {
  return (vel * 3600 / 1000);
}

function converttomile(vel) {
  return (vel * 3600 / 1609.344);
}



function convert(vel, unidad) {
  switch (unidad) {
    case "mps":
      return (converttomile(vel) + " " + unidad);
    case "m/s":
      return (vel + " " + unidad);
    case "km/h":
      return (converttokm(vel) + " " + unidad);
    case undefined:
      throw ReferenceError;
    default:
      throw SyntaxError;
  }
}

let velocity;
try {
  velocity = 10;
  console.log("m/s:" + velocity + " " + convert(velocity, "abc"));

} catch (e) {
  switch (e.name) {
    case "ReferenceError":
      console.log("Illegal reference has ocurred")
      break;
    case "SyntaxError":
      console.log("Syntax Error has ocurred")
      break;
    default:
      console.log("Error")
  }
}

try {
  velocity = 10;
  console.log("m/s:" + velocity + " " + convert(velocity));
} catch (e) {
  switch (e.name) {
    case "ReferenceError":
      console.log("Illegal reference has ocurred")
      break;
    case "SyntaxError":
      console.log("Syntax Error has ocurred")
      break;
    default:
      console.log("Error")
  }
}

try {
  velocity = 10;
  console.log("m/s:" + velocity + " " + convert(velocity,"mps"));
} catch (e) {
  switch (e.name) {
    case "ReferenceError":
      console.log("Illegal reference has ocurred")
      break;
    case "SyntaxError":
      console.log("Syntax Error has ocurred")
      break;
    default:
      console.log("Error")
  }
}
