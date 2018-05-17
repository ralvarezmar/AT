'use strict'

let mensaje = '';
let name;
let position = {
  name: '',
  latitud: undefined,
  longitud: undefined,
  precision: undefined,
  hora: undefined,
};

function getCoords(latitude, longitude, accuracy) {
  name = prompt("¿Cómo te llamas?");;
  var d = new Date();
  let hora = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  position.name = name;
  position.latitud = latitude.toFixed(3);
  position.longitud = longitude.toFixed(3);
  position.precision = accuracy.toFixed(3);
  position.hora = hora;
  let output = localStorage.getItem(name);
  if (output) {
    var message = JSON.stringify(output);
  } else {
    var message = "primera visita: " + " Coordenadas: Latitud: ";
    message += JSON.stringify(position.latitud) + " Longitud: ";
    message += JSON.stringify(position.longitud) + " con una precisión de: ";
    message += JSON.stringify(position.precision) + " metros ";
  }
  localStorage.setItem(position.name, JSON.stringify(position));
  console.log(message);
  return message;
};
