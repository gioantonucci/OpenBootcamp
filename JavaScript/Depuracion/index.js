// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una función que admita un parámetro "num", 
//y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función


function fibonacci(num) {
    secuencia = [];
    secuencia[0]= 1;
    secuencia[1]= 1;
    for (let i = 2; i < num; i++) {
       secuencia[i] = secuencia[i - 2] + secuencia[i - 1];
       secuencia = [...secuencia]
    }
   return secuencia;
}

console.log(fibonacci(6));
