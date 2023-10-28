"use strict";
/*//Declarar variables en js
//var variable global
//let variable
//const constante
//let y const nacen porque son variables con alcance o scope

/*let edad = prompt("Dame tu edad");
Number(edad);
//let edadmenos = edad-5;
console.log(edad +5);
console.log(typeof(edad));
//document.write(nombre);

//tipos de datos

let texto = "Mi nombre es Juan Pablo 'otro texto'";
let numero = 4;

Tipos de datos primitivos
String(numero);
Number(numero) (float o integer) entero o decimal;
Boolean(true or false);
Fecha
Undefined
Null (sí está definido pero no hay nada)
*/
//let suma = true;

//let menor = (10==='10');
//console.log(menor);

//let fecha = new Date();
//Operadores aritméticos
//let suma = 1+2;
//let resta = 1-2;
//let multiplicacion = 1*2;
//let division = 1/2;
//let mod = 10 % 5; //Residuo

//let uno = 1;
//uno ++;
//console.log(uno); //Incremento en uno
//
//let dos = 2;
//dos --;
//console.log(dos); //decremento en uno

////operadores relacionales

//let mayor = 5 > 3;
//let menor = 3 < 5;
//let mayorigualque = 20 >= 10;
//let menorigualque = 20 <= 10;
//let igual = 10 == '10';
//let exactamenteigual = 10 === 10;
//let diferente = 10 != 30;
//console.log(diferente);

//ECMASCRIPT 6 Es la versión en la que basa Javascript por ello el "moderno"

//Tipos de datos especiales o compuestos


//Arrays - vectores - conjunto de datos y pueden ser diferente tipo (inician en posición 0)

/*let frutas = ['pera', 'manzana', 'platano', null];
let numeros = ['cinco', 6, 23, 'veinte'];

//Objetos
let persona = {nombre: 'JPablo', edad: 18, correo: 'jjimenez57'}

//objeto JSON (Javascript object notation)- Formato de intercambio de datos ligero y descriptivo. Destructuracion

let personas = [
    {nombre: 'JPablo', edad: 18, correo: 'jjimenez57'},
    {nombre: 'Cris', edad: 20, correo: 'ccruz54'},
    {nombre: 'Mario', edad: 22, correo: 'mmario22'},
    persona,
];

//Operadores lógicos o booleans (true or false)
let numero1 = 10;
let numero2 = 14;

//AND o Y
let and = (numero1 >10 && numero2 >10);

//Para que un and tenga resultado true, todas las condiciones se tienen que cumplir o ser verdaderas. SI UNA ES FALSA el resultado es false
//OR O O

let or = (numero1 >10 || numero2 >10);

//Para que un or tenga resultado true, SE DEBE DE CUMPLIR UNA SOLA CONDICIÓN
//NOT O NEGACIÓN convertir a lo contrario

let negacion =!(numero1 >10); true
//Pokeapi es un servicio de backend */

let edad = prompt("Ingresa tu edad");
if (edad >= 18) { 
   let nombre = prompt("Ingrese su nombre y su apellido");
    document.write("¡Hola " + nombre + "!");
} else {
    document.write("Eres menor de edad");
}