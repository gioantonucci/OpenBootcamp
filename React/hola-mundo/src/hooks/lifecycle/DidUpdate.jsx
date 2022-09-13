import React, { Component, useEffect } from "react";
//----------------------------COMPONENTE CLASE
export class DidUpdate extends Component {
  componentDidUpdate() {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado"
    );
  }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    );
  }
}


//------------------------------------COMPONENTE FUNCION: SIN CORCHETES PARA QUE SE EJECUTE TODAS LAS VECES
export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
        "Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado"
    );
  });

  return (
    <div>
      <h1>DidUpdateHook</h1>
    </div>
  );
};