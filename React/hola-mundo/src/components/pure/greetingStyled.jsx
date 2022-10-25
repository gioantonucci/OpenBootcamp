import React, { useState } from "react";

//Definiendo estilos en constantes

// ? Estilo para usuario logueado
const loggedStyle = {
  backgroundColor: 'green',
  color: "white",
  fontWeight: "bold"
};
// ? Estilo para usuario no logueado
const unloggedStyle = {
  backgroundColor: 'tomato',
  color: "white",
  fontWeight: "bold"
};

const GreetingStyled = (props) => {
  //Genarmos un estado para el componente q controle si el user esta logueado
  const [logged, setLogged] = useState(false);
    const greetingUser = <p>Hello, {props.name} </p>
    const pleaseLogin =  <p>Please login</p>


  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? greetingUser : pleaseLogin}
      <button
        onClick={() => {
          console.log("boton pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
