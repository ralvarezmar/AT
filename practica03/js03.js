'use strict'

let SPECIALCHAR="_,.-{}[]!·$%&/()=?¿¡'";
let CAPS= "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let MIN="abcdefghijhklmnñopqrstuvwxyz";
let NUMS="0123456789";

function searchChar(password,char,num){
  let count=0;
  for(let i of password){
    for(let j of char){
      if(i==j){
        ++count;
      }
    }
  }
  return (count>=num);
}

function checkLenght(password,len){
  return (password.length>len);
}

function checkPassword(password,len,nMIN,nMay,nInt,nspecialchars,sChars){
  return (checkLenght(password,len) && searchChar(password,MIN,nMIN)
      && searchChar(password,CAPS,nMay) && searchChar(password,NUMS,nInt) && searchChar(password,sChars,nspecialchars));
}

let pass;
let check;

pass = "holamundo12345";
check = checkPassword(pass,4,2,2,2,4,SPECIALCHAR);
console.log("Contraseña: " + pass + " Valida: " + check + "\n");

pass = "malacontraseña";
check = checkPassword(pass,10,2,2,2,2,SPECIALCHAR);
console.log("Contraseña: " + pass + " Valida: " + check + "\n");

pass = "23101991";
check = checkPassword(pass,14,2,2,2,2,SPECIALCHAR);
console.log("Contraseña: " + pass + " Valida: " + check + "\n");

pass = "%$Urjc1234_ETSIT";
check = checkPassword(pass,10,2,1,2,3,SPECIALCHAR);
console.log("Contraseña: " + pass + " Valida: " + check + "\n");

pass = "123456HolaPassword";
check = checkPassword(pass,8,2,1,2,0,SPECIALCHAR);
console.log("Contraseña: " + pass + " Valida: " + check + "\n");

pass = "Pa$$word5UB3Nurjc";
check = checkPassword(pass,14,2,2,2,2,SPECIALCHAR);
console.log("Contraseña: " + pass + " Valida: " + check + "\n");
