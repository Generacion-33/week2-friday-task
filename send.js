/****************************/
/* Ejercicios con métodos: */
/***************************/

// 1. Crea una funcion que reciba una cadena de texto como este “mi-cadena-corta” y devuelva un nuevo arreglo con las palabras en camelCase ejemplo: “miCadenaCorta.

// 2. Ordena de mayor a menor las edades de un arreglo de personas.
const people = [
    { name: "Wladimir", age: 1 },
    { name: "Pablo", age: 29 },
    { name: "Andres", age: 55 },
    { name: "Carlos", age: 2 },
    { name: "Juan", age: 13 },
];

// (a, b) => b.age - a.age

// 3. Supongamos que tenemos un arreglo de cadenas. Nos gustaría tener una copia ordenada del mismo, pero mantener el original sin modificar. Crea una función que reciba un arreglo de cadenas y devuelva un nuevo arreglo con las cadenas ordenadas sin modificar el original.
const vocales = ["i", "e", "o", "u", "a"];

// 4. Crea una funcion que reciba como parámetro un arreglo de nombres y devuelva un nuevo arreglo sin repetir ningún nombre.
const nombres = [
    "Wladimir",
    "Pablo",
    "Andres",
    "Carlos",
    "Juan",
    "Wladimir",
    "Pablo",
    "Andres",
    "Carlos",
];

// 5. crea una funcion que reciba un arreglo de números y devuelva un nuevo arreglo con la suma de los arreglos. [1,2], [3,4] => 10
const arreglo1 = [1, 2, 3];
const arreglo2 = [4, 5, 6];

function sumarArreglos(arr1, arr2) {}

// tenemos este arreglo de objetos
const usuarios = [
    {
        nombre: "Erik",
        edad: 29,
        correo: "erik@academlo.com",
        social: [
            { nombre: "facebook", url: "facebook/erik" },
            { nombre: "twitter", url: "twitter/erik" },
        ],
        genero: "Hombre",
    },
    {
        nombre: "Georg",
        edad: 33,
        correo: "georg@academlo.com",
        social: [
            { nombre: "facebook", url: "facebook/georg" },
            { nombre: "twitter", url: "twitter/georg" },
        ],
        genero: "Hombre",
    },
    {
        nombre: "Andrea",
        edad: 42,
        correo: "andrea@hotmail.com",
        social: [
            { nombre: "facebook", url: "facebook/andrea" },
            { nombre: "twitter", url: "twitter/andrea" },
        ],
        genero: "Mujer",
    },
    {
        nombre: "Oscar",
        edad: 31,
        correo: "oscar@academlo.com",
        social: [
            { nombre: "facebook", url: "facebook/oscar" },
            { nombre: "twitter", url: "twiter/oscar" },
        ],
        genero: "Hombre",
    },
    {
        nombre: "Daniela",
        edad: 22,
        correo: "andrea@uaq.mx",
        social: [
            { nombre: "facebook", url: "facebook/andrea" },
            { nombre: "twitter", url: "twitter/andrea" },
        ],
        genero: "Mujer",
    },
];

// 6.1. Almacena todos los correos del arreglo usuarios.

// 6.2. Almacena todas las urls de las cuentas de facebook del arreglo usuarios.
