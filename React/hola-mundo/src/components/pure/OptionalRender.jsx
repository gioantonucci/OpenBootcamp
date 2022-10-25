import React, { useState } from "react";

// ? Estilo para usuario logueado
const loggedStyle = {
  backgroundColor: "green",
  color: "white",
  fontWeight: "bold",
};
// ? Estilo para usuario no logueado
const unloggedStyle = {
  backgroundColor: "tomato",
  color: "white",
  fontWeight: "bold",
};
// LOGIN / LOGOUT BUTTONS
const LoginButton = ({ loginAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={loginAction}>
      Login
    </button>
  );
};

const LogoutButton = ({ logoutAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={logoutAction}>
      Logout
    </button>
  );
};

// ? (Expresion true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresióm => no se renderiza la expresión

const OptionalRender = () => {
  const [access, setAccess] = useState(false);
  const [nMessages, setNMessages] = useState(0);
  //   const updateAccess = () => {
  //     setAccess(!access)
  //   }

  const loginAction = () => {
    setAccess(true);
  };

  const logoutAction = () => {
    setAccess(false);
  };
  let optionalButton;

  //   if(access) {
  //     optionalButton = <button onClick={updateAccess}> Logout</button>
  //   } else {
  //     optionalButton = <button onClick={updateAccess}> Login</button>
  //   }

  if (access) {
    optionalButton = (
      <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction} />
    );
  } else {
    optionalButton = (
      <LoginButton propStyle={loggedStyle} loginAction={loginAction} />
    );
  }

  // Unread messages
  let addMessages = () => {
    setNMessages(nMessages + 1);
  };

  return (
    <div>
      {optionalButton}
      {access ? (
        <div>
          {nMessages > 0 && nMessages === 1 && (
            <p> You have {nMessages} new message!</p>
          )}
          {nMessages > 1 && <p> You have {nMessages} new messages!</p>}
          {nMessages === 0 && <p> You dont have new messages.</p>}
          <button on onClick={addMessages}>
            Add messages
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default OptionalRender;
