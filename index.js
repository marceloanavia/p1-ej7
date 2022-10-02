let numero1 = null;
let numero2 = null;
let resultado = null;

function obtenerNumero1() {
    numero1 = ingresarNumero("Introducir número 1");
}
function obtenerNumero2() {
    numero2 = ingresarNumero("Introducir número 2");
}

function operacion(operador){

    if (numero1 === null || numero2 === null){
        alert("ingrese los numeros primero");
    } else {
        switch (operador) {
            case "multiplicar":
                resultado = multiplicar(numero1, numero2);
                break;
            case "sumar":
                resultado = sumar(numero1, numero2);
                break;
            case "dividir":
                if (numero2 !== 0){
                    resultado = dividir(numero1, numero2);
                } else {
                    alert("no se puede dividir por 0");
                }
                break;
            case "restar":
                resultado = restar(numero1, numero2);
                break;
            default:
                break;
        }
    }   
}

function mostrar(){
    alert(verificarResultado());
}




























/*
function obtenerNumero1() {
    let numero1;
    do{
        numero1 = parseFloat(prompt("Ingresar valor 1"));

        var flag = true;
        if (isNaN(numero1)){
            alert("Se permite únicamente números");
            flag = false;
        }
    } while (!flag);
    return numero1;
}
function obtenerNumero2() {
    let numero2;
    do{
        numero2 = parseFloat(prompt("Ingresar valor 2"));

        var flag = true;
        if (isNaN(numero2)){
            alert("Se permite únicamente números");
            flag = false;
        }
    } while (!flag);
    return numero2;
}
function operacion(operador){
    switch (operador) {
        case "multiplicar":
            operador = "*" ;
            break;
        case "sumar":
            operador =  "+" ;
            break;
        case "dividir":
            operador =  "/" ;
            break;
        case "restar":
            operador =  "-";
            break;
        default:
            break;
    }
    return operador;
}

function mostrar(numero1, numero2, operador){
    let resultado;
    switch (operador) {
        case "*":
            resultado = numero1 * numero2 ;
            break;
        case "+":
            resultado = numero1 + numero2 ;
            break;
        case "/":
            resultado = numero1 / numero2 ;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        default:
            break;
    }

    alert(`El resultado es ${resultado}`)
    return resultado;
}

*/