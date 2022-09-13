import React, { Component, useEffect } from "react";
//----------------------------COMPONENTE CLASE
export class WillUnmount extends Component {
  componentWillUnmount() {
    console.log("Comportamiento antes de que el componente desaparezca");
  }

  render() {
    return (
      <div>
        <h1>WillUnmount</h1>
      </div>
    );
  }
}

//------------------------------------COMPONENTE FUNCION: RETURN.
export const WillUnmountHook = () => {
  useEffect(() => {
    // aca no va nada
    return () => {
      console.log("Comportamiento antes de que el componente desaparezca");
    };
  }, []);

  return (
    <div>
      <h1>WillUnmountHook</h1>
    </div>
  );
};
