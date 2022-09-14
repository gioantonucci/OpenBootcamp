import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";


const ContactForm = ({ add }) => {
  const nameRef = useRef("");
  const emailRef = useRef("");


  function addContact(e) {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      emailRef.current.value,
      false,
    );
    add(newContact);
  }

  return (
    <form
      onSubmit={addContact}
      className="d-flex justify-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill">
        <input
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg"
          placeholder="Name"
          required
          autoFocus
        />
        <input
          ref={emailRef}
          id="inputEmail"
          type="text"
          className="form-control form-control-lg"
          placeholder="Email"
          required
        
        />
      </div>
      <button type="submit" className="btn btn-success btn-lg ms-1">
        Add
      </button>
    </form>
  );
};

ContactForm.protoTypes = {
  add: PropTypes.func.isRequired,
};

export default ContactForm;