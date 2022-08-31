// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)
let heightCms = 160

// - Una variable que contenga tu altura en metros (número de coma flotante)
let heightMts = 1.60

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let weightKg = 60.2

// - Una variable que contenga tu altura en metros redondeada hacia arriba
let heightCeil = heightMts.toPrecision(1)                                                                                                                                                   
console.log(heightCeil);

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let weightFloor = weightKg.toFixed()
console.log(weightFloor);

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es 
//igual al máximo valor que se puede obtener en Javascript
let max = Number.MAX_VALUE;
let maxValue = max + 1 ;
console.log(maxValue==max);
