import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef("");

  function pressButton() {
    const text = messageRef.current.value;
    alert(`Text in Input: ${text}`);
  }

  function pressButtonParams(texto) {
    alert(`Text: ${texto}`);
  }

  function submitForm(e) {
    e.preventDefault();
    update(nameRef.current.value)
  }


  return (
    <div
      style={{
        background: "cyan",
        padding: "30px",
      }}
    >
      <p onMouseOver={() => console.log("On Mouse Over")}>Hello {name}</p>
      <button onClick={() => console.log("Botón 1 pulsado")}>Botón 1</button>
      <button onClick={pressButton}>Botón 2</button>
      <button onClick={() => pressButtonParams("hello")}>Botón 3</button>
      <input
        placeholder="Insert a text"
        onFocus={() => console.log("Input focus")}
        onChange={(e) => console.log("Input Changed: ", e.target.value)}
        onCopy={() => console.log("Copied text from Input")}
        ref={messageRef}
      ></input>
      <button onClick={() => send(messageRef.current.value)}>
        Send Message
      </button>
      <div style={{
        marginTop: '20px'
      }}>
        <form onSubmit={submitForm}>
            <input ref={nameRef} placeholder="Name" />
            <button type="submit">Update Name</button>
        </form>
      </div>
    </div>
  );
};

export default Child;
