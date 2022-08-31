// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Cebollas", "Fideos", "Salsa", "Queso", "Tomates"];
console.log(listaCompra);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push('Aceite de Girasol');
console.log(listaCompra);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop('Aceite de Girasol');
console.log(listaCompra);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {titulo: 'V de Venganza', director: 'James McTei', fecha: '2006'},
    {titulo: 'Jojo Rabbit', director: 'Taika Waititi', fecha: '2019'},
    {titulo: 'Atrápame si puedes', director: 'Steven Spielberg', fecha: '2003'}
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const post2010 = peliculas.filter( p => p.fecha > 2010)
console.log(post2010);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(p => p.director)
console.log(directores); 

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(p=>p.titulo)
console.log(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const titulosDirectores = titulos.concat(directores)
console.log(titulosDirectores);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directoresTitulos =[ ...directores, ...titulos]
console.log(directoresTitulos);