import React, { useState, useRef, useEffect } from "react";
/**
 * Ejemplo de
 * useState()
 * useRef() -> identificar elementos especificos y referenciarlos dentro de la vista
 * useEffect() -> cambios en la vista y ciclo d vida de componente
 */

function Ejemplo2() {
  //dos contadores distintos
  //en estados diferentes
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  //creamos referencia con useRef para asociar una variable
  //con un elemento del DOM
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }

  /**
   * useEffect()
   * ? caso 1: Ejecutar siempre un snippet de código
   * Cada vez que haya un cambio en el estado del componente
   * se ejecuta useEffect
   */
  //   useEffect(() => {
  //     console.log("cambio en el estado del componente");
  //     console.log("Mostrando referencia a elemento del DOM:");
  //     console.log(miRef);
  //   });

  /**
   * ? caso2: Ejecutar solo cuando cambie contador 1
   * Cada vez que haya un cambio en contador uno se ejecuta el useEffect,
   * si cambia contador dos no habrá ejecución
   *
   */
  //   useEffect(() => {
  //     console.log("cambio en el estado del componente");
  //     console.log("Mostrando referencia a elemento del DOM:");
  //     console.log(miRef);
  //   }, [contador1]);

  /**
   * ? caso 3: Ejecutar SOLO cuando cambie contador 1 O contador 2
   * Cada vez que haya un cambio en contador uno se ejecuta el useEffect,
   * Cada vez que haya un cambio en contador dos se ejecuta el useEffect
   */
   useEffect(() => {
        console.log("cambio en el estado del contador 1 / contador 2");
        console.log("Mostrando referencia a elemento del DOM:");
        console.log(miRef);
      }, [contador1, contador2]);


  return (
    <div>
      <h1>Ejemplo de useState(), useRef(), useEffect()</h1>
      <h2>Contador1: {contador1}</h2>
      <h2>Contador2: {contador2}</h2>
      {/*Elemento refernciado*/}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      <div>
        <button onClick={incrementar1}>incrementar contador 1</button>
        <button onClick={incrementar2}>incrementar contador 2</button>
      </div>
    </div>
  );
}

export default Ejemplo2;
