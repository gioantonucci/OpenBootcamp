// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia
const familia = new Set(['Gabriela', 'Ariadna']);
console.log(familia);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
const conmigo = familia.add('Giovanna');
console.log(conmigo);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
const JS = familia.add('JavaScript');
console.log(JS);