// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston
// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
// - Registra el error en un archivo a través de un try...catch

function miFuncion (a, b) {
    if (typeof a === 'number' && typeof b === 'number'){
    return a + b};
    throw new Error('Los parámetros tienen que ser números');
}

// console.log(miFuncion(5 ,3));
// console.log(miFuncion(4, 'perro'));


const a = 4;
const b = 'perro'

try {
    console.log('Estamos ejecutando');
    miFuncion(a, b)
    console.log(miFuncion());
} catch(e) {
    console.log(`El error es ${e}`);
} finally {
    console.log('Yo me ejecuto siempre!');
}
