
const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;

const process = require('process');

let operacion = process.argv[2];
let numeroA = +process.argv[3];
let numeroB = +process.argv[4];

const calculadora = (callback,a,b) =>{
    return callback(a,b)
}

switch (operacion) {
    case "sumar":
        console.log(calculadora(sumar,numeroA, numeroB));
        break;
    case "restar":
        console.log(calculadora(restar,numeroA, numeroB));
        break;
    case "multiplicar":
        console.log(calculadora(multiplicar,numeroA, numeroB));
        break;
    case "dividir":
        console.log(calculadora(dividir,numeroA, numeroB));
        break;
    default:
        break;
}


