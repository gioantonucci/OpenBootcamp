// Crea un archivo JS que contenga las siguientes líneas
// - Una cadena de texto con tu Nombre
let name = 'Giovanna';
console.log(name);

// - Otra cadena de texto con tu Apellido
let lastName = 'Antonucci';
console.log(lastName);

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${name} ${lastName}`;
console.log(estudiante);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let charLength = estudiante.length
console.log(charLength);

// - Una variable que contenga la primera letra del Nombre
let firstCharName = name.slice(0,1)
console.log(firstCharName);

// - Otra variable que contenga la última letra del Apellido
let firstCharLastName = lastName.slice(0,1)
console.log(firstCharLastName);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let noSpaces = estudiante.trim()
console.log(noSpaces);

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let isIn = estudiante.includes(name)
console.log(isIn);