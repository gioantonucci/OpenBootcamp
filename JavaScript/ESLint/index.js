// Crea un nuevo proyecto de Node
// - Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
// - Duplica el archivo del ejercicio de la sesión 04-Textos
// - Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
// - Crea el fichero .eslintrc.json
// - Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
// - Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
// - Crea un script en el package.json para corregir automáticamente todos los errores
// - Ejecuta el script a través del terminal

let name = 'Giovanna'
let lastName = "Antonucci"
let estudiante = `${name} ${lastName}`
let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)
let charLength = estudiante.length
console.log(charLength)
let firstCharName = name.slice(0,1)
console.log(firstCharName)
let firstCharLastName = lastName.slice(0,1)
console.log(firstCharLastName)
let noSpaces = estudiante.trim()
console.log(noSpaces)
let isIn = estudiante.includes(name)
console.log(isIn)
