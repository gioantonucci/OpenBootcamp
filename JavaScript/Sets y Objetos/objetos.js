// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const yo = {
  nombre: "Giovanna",
  apellido: "Antonucci",
  edad: "24",
  altura: "160cm",
  eresDesarrollador: true,
};

// - Una variable que obtenga tu edad a partir del objeto anterior
const edad = yo.edad;
console.log(edad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const amigos = [
  { ... yo },
  {
    nombre: "Micaela",
    apellido: "Guerra",
    edad: "25",
    altura: "175cm",
    eresDesarrollador: false,
  },
  {
    nombre: "Franco",
    apellido: "Cantarini",
    edad: "24",
    altura: "180cm",
    eresDesarrollador: false,
  },
];
console.log(amigos)

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
amigos.sort((a, b) => b.edad - a.edad)
console.log(amigos)
