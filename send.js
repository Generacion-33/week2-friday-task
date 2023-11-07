/***************************************/
/* Ejercicios con arreglos y objetos: */
/**************************************/

// 1. Crear un objeto que contenga un arreglo de 5 nombres de personas.
console.log("--ejercicio1--");

const people = { names: ['Martha', 'Jimmy', 'Dexter', 'Jonathan', 'Luis'] }
console.log(people);

// 2. Crea un arreglo de 5 objetos, cada objeto debe contener un nombre y una edad.

console.log("--ejercicio2--");

const users = [
    { name: "Camilo", age: 27 },
    { name: "Harlinson", age: 21 },
    { name: "Cherry", age: 22 },
    { name: "Juan", age: 23 },
    { name: "Ramses", age: 41 }
]
console.log(users[1]["name"]); //Harlinson

// 3. Del arreglo anterior que creaste, crea un nuevo arreglo que contenga solo los nombres de las personas.

console.log("--ejercicio3--");

const usersName = []

for (const user of users) {
    usersName.push(user['name'])
    //console.log(user['name']);
}

console.log(usersName);


// 4. Declara una función que reciba el mismo arreglo de objetos que creaste y que retorne la suma de todas las edades.

console.log("--ejercicio4--");

function sumaAges(users) {

    let solution = 0

    for (let i = 0; i < users.length; i++) {
        // console.log(users[i]['age']);
        solution += users[i]['age']
    }

    return solution

}

console.log(sumaAges(users));


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

// 5.1. Crea un array de nombre correos y almacena todos los correos del arreglo usuarios.

console.log('--Ejercicio5.1--');
const emailUsers = []

for (const usuario of usuarios) {
    // console.log(usuario.correo);
    // console.log(usuario["correo"]);
    emailUsers.push(usuario["correo"])
}
console.log(emailUsers);

// 5.2. Crea un array de nombre cuentasDeFacebook y almacena todas las urls de las cuentas de facebook del arreglo usuarios.

console.log('--Ejercicio5.2--');

const cuentasDeFacebook = []

for (let i = 0; i < usuarios.length; i++) {
    cuentasDeFacebook.push(usuarios[i]['social'][0]['url'])
}

console.log(cuentasDeFacebook);


////////////////////////////////////// 💪💪💪💪💪

//6. Crear una funcion que convierta a camelCase -> "esta-frase" a "estaFrase"
// La funcion entrevistaEn10Dias, recibice por paramentro un string al que lo debes convertir en camelCase
// Otro ejemplo "el-dia-esta-soleado" -> "elDiaEstaSoleado"
console.log('--Ejercicio6--');

function camelCase(phrase) {

    const phraseArray = phrase.split('-')// ['el', 'dia','esta','soleado']
    let solution = [phraseArray[0]] //['el' ,'Dia', 'Esta', 'Soleado']



    //dia -> D
    //dia -> ia
    //solution Dia


    for (let i = 1; i < phraseArray.length; i++) {
        let firstCharacter = phraseArray[i][0].toUpperCase() //D - E -S
        let restCharacter = phraseArray[i].slice(1) //ia - sta - oleado
        solution.push(`${firstCharacter}${restCharacter}`)
    }

    return solution.join('')
}

console.log(camelCase('el-dia-esta-soleado')); //"elDiaEstaSoleado"

/////

console.log('--Ejercicio7, pero 11 de logic--');

/**
 * 1) Hemos generado el contador:
 * {
    27: 1,
    23: 2,
    25": 1
    }
 * 2) Una vez que haya generado el contador, puedo encontrar el valor mas grande, y ese valor tendra asociado la key o la propiedad con mayores repeticiones. Para ello puedo pushear los valores a un array y ordenarlos de mayor a menor o de menor a mayor: [1,2,1]->[2,1,1]

*3) Al tener el valor mas grande, debo encontrar la key que tenga asociado ese valor
 */



function findMostCommonAge(students) {

    let solution = 0

    //1)-generacion del contador
    const counter = {}
    for (const student of students) {
        if (counter[student.age]) {
            counter[student.age]++
        } else {
            counter[student.age] = 1
        }
    }

    //2) Vamos a generar el array que contenga las repeticiones

    const agesRepeat = []

    for (const age in counter) {
        agesRepeat.push(counter[age])
    }

    //3)- Vamos a ordenar las repeticiones de mayor a menor

    const mostRepeat = agesRepeat.sort((a, b) => b - a)[0] //2

    for (const age in counter) {
        if (counter[age] === mostRepeat) {
            solution = parseInt(age)
        }
    }

    return solution
}

const students = [
    { name: 'Daniela', age: 25 },
    { name: 'Andrea', age: 23 },
    { name: 'José', age: 25 },
    { name: 'Georg', age: 21 },
]

console.log(findMostCommonAge(students));