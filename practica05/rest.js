'use strict'
let request = require('request');

let dir_base="http://api.weatherunlocked.com/"
//let recurso = "api/current/"
let recurso = "api/forecast/"
let localizacion = "40.283,-3.822"
//let localizacion = "es.28942"
let uri = dir_base + recurso + localizacion

let app_id = "15fb643e"
let app_key= "65e16d5586caf3c0cd80612cc9d5e05f"
let param1 = "app_id=" + app_id + "&" + "app_key=" + app_key

let param2 = "lang=es"

uri =  uri + "?" + param1 + "&" + param2

console.log(uri + "\n")

request.get(uri, function(error, response, body){
    console.log("error:");
    console.log(error);
    console.log("Body:");
    print(body);

});

function imprime(x){
    let y=JSON.parse(x);
    console.log(y);
}

function printDay(day){
  console.log("------Dia: " + day["date"]+ "-------");
  console.log("Salida de sol: " + day["sunrise_time"]);
  console.log("Puesta de sol: " + day["sunset_time"]);
  console.log("Salida de la luna: " + day["moonrise_time"]);
  console.log("Puesta de la luna: " + day["moonset_time"]);
  console.log("Temperatura mínima: " + day["temp_min_c"]+"ºC");
  console.log("Temperatura máxima: " + day["temp_max_c"]+"ºC");
  console.log("Precipitaciones: " + day["precip_total_mm"]+"mm");
  console.log("Lluvia: " + day["rain_total_mm"]+"mm");
  console.log("Nieve: " + day["snow_total_mm"]+"mm");
  console.log("Probabilidad de lluvia: " + day["prob_precip_pct"]+"%");
  console.log("Humedad máxima relativa: " + day["humid_max_pct"]+"%");
  console.log("Humedad mínima relativa: " + day["humid_min_pct"]+"%");
  console.log("Viento: " + day["windspd_max_kmh"]+"km/h");
  console.log("Presión atm máxima: " + day["slp_max_mb"]+"mb");
  console.log("Presión atm mínima: " + day["slp_min_mb"]+"mb");

  console.log("----------------------------\n");


}
function print(x){
  let days=JSON.parse(x);
  for(let day of days["Days"]){
    printDay(day);
  }
}
