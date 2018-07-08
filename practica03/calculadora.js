'use strict'
//Ruben Alvarez

let operadores="+-/*";

var STATUS = {
  PRIMERNUM : {value: 0,name: "primero"},
  SEGUNDONUM: {value: 1,name: "segundo"},
  IGUAL: {value: 2,name: "resultado"},
  CUENTA: {value: 3,name: "operador"},
};

var CUENTA = {
  SUMA: {value: 0,name: "suma"},
  RESTA: {value: 1,name: "resta"},
  DIVISION: {value: 2,name: "division"},
  MULTIPLICACION: {value: 3,name: "multiplicacion"},
}

function operacion(calc){
  switch (calc.cuenta) {
    case "+":
      return parseFloat(calc.num1) + parseFloat(calc.num2);
    case "-":
      return parseFloat(calc.num1) - parseFloat(calc.num2);
    case "/":
      return parseFloat(calc.num1) / parseFloat(calc.num2);
    case "*":
      return parseFloat(calc.num1) * parseFloat(calc.num2);
    default:
      return "Error";
  }
}

function isOperator(key){
  var operator="*/-+";
  for(let i of operator){
    if(key===i){
      return true;
    }
  }
  return false;
}

function checkStatus(key,calc){
  switch (calc.status) {
    case STATUS.PRIMERNUM:
      calc.num1=calc.num1+key;
      return calc.num1;
    case STATUS.SEGUNDONUM:
      calc.num2=calc.num2+key;
      return calc.num2;
    case STATUS.IGUAL:
      let final=operacion(calc);
      calc.cuenta=undefined;
      calc.status=STATUS.CUENTA;
      calc.num1=String(final);
      calc.num2="";
      return final;
    case STATUS.CUENTA:
      calc.cuenta=key;
      calc.status=STATUS.SEGUNDONUM;
      return key;
  }
}

function getKey(key,calc){
  if(isOperator(key) && calc.status===STATUS.PRIMERNUM){
    calc.cuenta=key;
    calc.status=STATUS.SEGUNDONUM;
    return key;
  }else if(isOperator(key) && calc.status===STATUS.SEGUNDONUM){
    calc.num1=String(operacion(calc));
    calc.num2="";
    calc.cuenta=key;
    return key;
  }
  if(key==="="){
    calc.status=STATUS.IGUAL;
  }
  if(key==="C"){
    calc.cuenta=undefined;
    calc.status=STATUS.PRIMERNUM;
    calc.num1="";
    calc.num2="";
    return "";
  }
  return checkStatus(key,calc);
}

function testCalc(){
  let calc={
    cuenta:undefined,
    status:STATUS.PRIMERNUM,
    num1:"",
    num2:"",
  };
  let calc2={
    cuenta:undefined,
    status:STATUS.PRIMERNUM,
    num1:"",
    num2:"",
  };
  console.log(getKey( "5", calc))
  console.log(getKey( "+", calc))
  console.log(getKey( "6", calc))
  console.log(getKey( "*", calc))
  console.log(getKey( "4", calc))
  console.log(getKey( "-", calc))
  console.log(getKey( "3", calc))
  console.log(getKey( "/", calc))
  console.log(getKey( "2", calc))
  console.log(getKey( "=", calc))
  console.log(getKey( "c", calc))

  console.log(getKey( "2", calc2))
  console.log(getKey( "*", calc2))
  console.log(getKey( "5", calc2))
  console.log(getKey( "=", calc2))
}

testCalc();
