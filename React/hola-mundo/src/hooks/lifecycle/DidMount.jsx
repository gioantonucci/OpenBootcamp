import React, { Component, useEffect } from "react";
//----------------------------COMPONENTE CLASE
export class DidMount extends Component {
  componentDidMount() {
    console.log(
      "Comportamiento antes de que el componente sea añadido al DOM (renderice)"
    );
  }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    );
  }
}


//------------------------------------COMPONENTE FUNCION: CORCHETES VACIOS
export const DidMountHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento antes de que el componente sea añadido al DOM (renderice)"
    );
  }, []);

  return (
    <div>
      <h1>DidMountHook</h1>
    </div>
  );
};
