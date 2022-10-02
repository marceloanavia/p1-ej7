/**
 * ingresar un numero y verificarlo
 * @param {string} msg mensaje del prompt
 * @returns 
 */
function ingresarNumero(msg){
let numero;
    do{
        numero = parseInt(prompt(msg));

        var flag = true;
        if (isNaN(numero)){
            alert("Se permite únicamente números");
            flag = false;
        }
    } while (!flag);
    return numero;
}

/** 
 * sumar dos numeros
 * @param {Number} num1 primer numero
 * @param {Number} num2 segundo numero
 * @returns
 */
const sumar = (num1, num2) => num1 + num2;

/** 
 * restar dos numeros
 * @param {Number} num1 primer numero
 * @param {Number} num2 segundo numero
 * @returns
 */
const restar = (num1, num2) => num1 - num2;

/**
 * multiplicar dos numeros
 * @param {Number} num1 primer numero
 * @param {Number} num2 segundo numero
 * @returns
 */
const multiplicar = (num1, num2) => num1 * num2;

/**
 * dividir dos numeros
 * @param {Number} num1 primer numero
 * @param {Number} num2 segundo numero
 * @returns
 */
const dividir = (num1, num2) => (num1 / num2).toFixed(2);

/** 
 * verificar si hay una operacion hecha
 * @param {null} resultado 
 * @returns 
 */
const verificarResultado = () => {
    if (resultado === null) {
        return "Realice una operacion primero";
    } else {
        return `el resultado de la operacion es ${resultado}`;
    }
}