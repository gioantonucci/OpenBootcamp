/*UseState*/

import React, { useState } from "react";

function Ejemplo1() {
  //valor inicial para un contador
  const valorInicial = 0;

  //valor inicial para una persona
  const personaInicial = {
    nombre: "Giovanna",
    email: "gioantonucci@hotmail.com",
  };

  /*
  Queremos q valorInicial y personaInicial sean parte del estado del componente para poder gestionar su cambio
  y reflejar este en la vista del componente

    const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
  */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);
  /**
   * Funcion para actualizar el estado privado q contiene el contador
   */
  function incrementarContador() {
    // ? funcionParaCambiar(nuevoValor)
    setContador(contador + 1);
  }
  /**
   *Funcion para actualizar el estado de persona en el componente
   */
  function actualizarPersona() {
    setPersona({
      nombre: "Shaio",
      email: "shaio@shaio.com",
    });
  }

  return (
    <div>
      <h2>Ejemplo de UseState()</h2>
      <h3>Contador: {contador} </h3>
      <button onClick={incrementarContador}>+1</button>
      <h3>Persona: </h3>
      <h4> {persona.nombre}</h4>
      <h4> {persona.email}</h4>
      <button onClick={actualizarPersona}>Actualizar persona</button>
    </div>
  );
}

export default Ejemplo1;
