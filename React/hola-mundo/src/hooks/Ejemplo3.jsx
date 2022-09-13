import React, { useContext, useState } from "react";

const miContexto = React.createContext(null);

function Componente1() {
  //Inicializamos un state vacio que va a rellenarse con los datos del contexto
  //del padre
  const state = useContext(miContexto);
  return (
    <div>
      <h1>El token es: {state.token}</h1>
      <Componente2></Componente2>
    </div>
  );
}

function Componente2() {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>La sesión es: {state.session}</h2>
    </div>
  );
}

export default function ComponenteConContexto() {
  const estadoIncial = {
    token: "1234567",
    session: 1,
  };
  //creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoIncial);

  function actualizarSesion() {
    setSessionData({
      token: "jWt123456798",
      session: sessionData.session + 1,
    });
  }

  return (
    <div>
      <miContexto.Provider value={sessionData}>
        {/*Todo dentro del provider puede leer los datos de sessionData
            Si se actualiza, los componentes lo actualizan también */}
        <Componente1></Componente1>

        <button onClick={actualizarSesion}>Actualizar sesión</button>
      </miContexto.Provider>
    </div>
  );
}
