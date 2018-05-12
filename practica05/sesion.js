'use strict'
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  let mensaje= '';

  function success(pos) {
    var x = pos.coords;
    mensaje = 'Tu posición actual es: \n';
    mensaje += 'Latitud:' + x.latitude;
    mensaje += ' Longitud:' + x.longitude;
    mensaje += ' con una precision de ' + x.accuracy + " metros ";
    mensaje += ' a las ';
    var d = new Date();
    let hora=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    mensaje += hora;
    console.log(mensaje);
    localStorage.setItem(name, mensaje);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  function getCoords(){
    var name=prompt("¿Cómo te llamas?");
    console.log(name);
    mensaje += 'Nombre: ';
    mensaje += name;
    let output = localStorage.getItem(name);
    if (output) {
      navigator.geolocation.getCurrentPosition(success, error, options);
      return output;
    } else {
      navigator.geolocation.getCurrentPosition(success, error, options);
      mensaje += output;
      return mensaje;
    }
    for (let clave in localStorage) {
      let valor = localStorage[clave];
      console.log(clave + ": " + valor)
    }

    for (let clave in localStorage) {
      localStorage.removeItem(clave);
    }
  };
