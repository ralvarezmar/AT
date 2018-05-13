'use strict'
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  let mensaje='';
  let name;

  let position ={
    name:'',
    latitud:undefined,
    longitud:undefined,
    precision:undefined,
    hora:undefined,
  };

  function success(pos) {
    var x = pos.coords;
    var d = new Date();
    let hora=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    position.name=name;
    position.latitud=x.latitude.toFixed(3);
    position.longitud=x.longitude.toFixed(3);
    position.precision=x.accuracy.toFixed(3);
    position.hora=hora;
    var message=JSON.stringify(position);
    localStorage.setItem(position.name, message);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  function borrar(){
      for (let clave in localStorage) {
        localStorage.removeItem(clave);
      }
  }

  function getCoords(){
    name=prompt("¿Cómo te llamas?");
    let output = localStorage.getItem(name);
    if (output) {
      navigator.geolocation.getCurrentPosition(success, error, options);
      var message=JSON.stringify(output);
      return message;
    } else {
      navigator.geolocation.getCurrentPosition(success, error, options);
      //message+=localStorage.getItem(name);
      var message=JSON.stringify(position);
      console.log(message);
      return message;
    }
  };
