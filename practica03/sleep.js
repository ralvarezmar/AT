'use strict'

function sleep(x){
  var init_time=new Date().getTime()+(x*1000);
  while(new Date().getTime()<init_time){}
}

console.log("Duermo");
sleep(4);
console.log("Despierto");
