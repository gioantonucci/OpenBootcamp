import React, { useState, useEffect } from "react";

const ClockFun = () => {
  const initialState = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };

  const [state, setState] = useState(initialState);

 
  useEffect(() => {
    const timerID = setInterval(() => {
        actualiza();
    }, 1000);
    return () => {
    clearInterval(timerID)
    };
  });

   const actualiza = () => {
    return setState({
        fecha: new Date(),
        edad: state.edad + 1,
        nombre: state.nombre,
        apellidos: state.apellidos
    })
  }

  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};

export default ClockFun;
