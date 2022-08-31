// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const hoy = new Date ();
console.log(hoy);

// - La fecha de tu nacimiento
const miCumple = new Date (1997,8,9);
console.log(miCumple);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const ayerHoy = hoy.getTime() > miCumple.getTime();
console.log(ayerHoy);

// - Una variable que contenga el día de tu nacimiento
const dia = miCumple.getDate();
console.log(dia);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = miCumple.getMonth() + 1;
console.log(mes);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const año = miCumple.getFullYear()
console.log(año);