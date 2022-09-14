import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";

function ContactComponent({ contact, remove, status }) {
  function StatusIcon() {
    if (contact.status) {
      return (
        <i
          onClick={() => status(contact)}
          className="bi-toggle-on task-action"
          style={{
            color: "green",
          }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => status(contact)}
          className="bi-toggle-off task-action"
          style={{
            color: "red",
          }}
        ></i>
      );
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="">{contact.name}</span>
      </th>
      <td className="align-middle">
        <span>{contact.email}</span>
      </td>
      <td className="align-middle">{StatusIcon()}</td>
      <td>
        <i
          className="bi-trash task-action"
          onClick={() => remove(contact)}
          style={{
            color: "tomato",
          }}
        ></i>
      </td>
    </tr>
  );
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  status: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default ContactComponent;
