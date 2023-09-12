/***************************************/
/* Ejercicios con arreglos y objetos: */
/**************************************/
console.log('-------------------------');
// 1. Crear un objeto que contenga un arreglo de 5 nombres de personas.

const object = { name: ['Diego', 'Andres', 'Santiago', 'Sergio', 'Johan'] }
console.log('Ejercicio 1');
console.log(object);
console.log('-------------------------');
// 2. Crea un arreglo de 5 objetos, cada objeto debe contener un nombre y una edad.
console.log('Ejercicio 2');

const users = [
    { nombre: 'Issac', edad: 23 },
    { nombre: 'Andres', edad: 18 },
    { nombre: 'Cristian', edad: 19 },
    { nombre: 'Dayana', edad: 22 },
    { nombre: 'Nelson', edad: 44 }
]
console.log(users);
console.log('-------------------------');

// 3. Del arreglo anterior que creaste, crea un nuevo arreglo que contenga solo los nombres de las personas.
console.log('Ejercicio 3');
const names = []
//El FOR OF, SOLO SE APLICA EN ARRAYS
const name = 'nombre'

//for(let i = 0; i<users.length;i++){} //

for (const value of users) { //El for of no reAsigna la variable iterable en su funcionamiento, en caso que necesite hacerlo, debo declararla como let y reasignar el valor manualmente
    //console.log(value[name]);
    //console.log(value['nombre']);
    //console.log(value.nombre);
    names.push(value.nombre)
}

console.log(names);

const names2 = []
for (let i = 0; i < users.length; i++) {
    names2.push(users[i]['nombre'])
}
console.log(names2);

console.log('-------------------------');
console.log('//FOR OF');
//FOR OF
const numeros = [2, 3, 4, 5]
for (let value of numeros) {
    const newValue = ++value
    console.log(newValue);
}
console.log(numeros);
console.log('-------------------------');

// 4. Declara una función que reciba el mismo arreglo de objetos que creaste y que retorne la suma de todas las edades.
console.log('Ejercicio 4');

function sumaDeEdades(array) {
    let age = 0
    for (const value of array) {
        //console.log(value['edad']);
        age += value['edad']
    }
    return age
}

console.log(sumaDeEdades(users));

console.log('-------------------------');
// 5. Del siguiente arreglo de objetos, realiza lo siguiente:
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
        correo: "daniela@uaq.mx",
        social: [
            { nombre: "facebook", url: "facebook/daniela" },
            { nombre: "twitter", url: "twitter/daniela" },
        ],
        genero: "Mujer",
    },
];

console.log('Ejercicio 5');
console.log('-------------------------');


// 5.1. Crea un array de nombre correos y almacena todos los correos del arreglo usuarios.
console.log('Ejercicio 5.1');
const nombresDeCorreo = []

for (const value of usuarios) {
    nombresDeCorreo.push(value['correo'])
}
console.log(nombresDeCorreo);

console.log('-------------------------');
// 5.2. Crea un array de nombre cuentasDeFacebook y almacena todas las urls de las cuentas de facebook del arreglo usuarios.

console.log('Ejercicio 5.2');
const arrayNameFacebook = []
for (const value of usuarios) {
    arrayNameFacebook.push(value['social'][0].url)
}
console.log(arrayNameFacebook);

console.log('-------------------------');
// 5.3. Ordena a los usuarios por edad.
console.log('Ejercicio 5.3');
const sortUsers = usuarios.sort((a, b) => (a.edad - b.edad))
console.log(sortUsers);
console.log('-------------------------');




///////////////////// ver mañana Martes
console.log('Ejercicio 6');

//6. Crear una funcion que convierta a camelCase -> "esta-frase" a "estaFrase"
// La funcion entrevistaEn10Dias, recibice por paramentro un string al que lo debes convertir en camelCase
// Otro ejemplo "el-dia-esta-soleado" -> "elDiaEstaSoleado"

function entrevistaEn10Dias() {
}

/**
 * GENERAR UN CONTADOR (es la clave)
 * 1- Crear objeto, para que registre en las repeticiones ->{23:3, 45:5, 89:2}
 * 2 - Crear un array que contengan en si los valores del objeto -> [3,5,2]
 * 3 - ordeno de mayor a menor, y obtengo el numero con mas frecuencia [5,3,2]
 * 4 - Guardo en una variable numero en el indice 0
 * 5 - Por ultimo buscare con un for in, la key que que tenga asociado el valor y retornare dicha keys
 */