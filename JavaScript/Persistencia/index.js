// Crea un nuevo proyecto de Node
// - Crea un fichero index.html (utiliza el comando "!")
// - Crea un fichero index.js
// - Integra el fichero index.js en el html
// - En el fichero index.js:

// - Crea una variable con tu nombre
let nombre = 'Giovana'
// - Crea una variable con tu apellido
let apellido = 'Antonucci'
// - Crea un objeto con tu nombre y tu apellido
let persona = {nombre: nombre, apellido: apellido}
console.log(persona)
// - Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem({'nombre': 'nombre'})

// - Almacena el objeto anterior en la LocalStorage
localStorage.setItem('nombre', 'nombre')
// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior

// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

// - Observa cómo la SessionStorage está vacía

// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado