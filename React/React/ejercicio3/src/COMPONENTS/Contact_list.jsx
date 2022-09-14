import React, { useState } from "react";
import { Contact } from "../models/contact.class";
import ContactComponent from "./ContactComponent";
import ContactForm from "./ContactForm";

function ContactList() {
  const defaultContact1 = new Contact("Mica", "Mica@gmail.com", true);
  const defaultContact2 = new Contact("Franki💋", "Franki@gmail.com", true);
  const defaultContact3 = new Contact("Shaio", "Shaio@gmail.com", false);

  const [contacts, setContacts] = useState([
    defaultContact1,
    defaultContact2,
    defaultContact3,
  ]);

  function statusContact(contact) {
    console.log("Status: ", contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].status = !tempContacts[index].status;
    setContacts(tempContacts);
  }

  function removeContact(contact) {
    console.log("Delete this contact: ", contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  }

  function addContact(contact) {
    console.log("Add this contact: ", contact);
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  return (
    <div>
      <div>
        <div className="col-12">
          <div className="card">
            <div className="card-header p-3">
              <h5>Your Contacts:</h5>
            </div>
          </div>
          <div
            className="card-body"
            data-mbd-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                 {contacts.map((contact, i) => {
                  return (
                    <ContactComponent
                      key={i}
                      contact={contact}
                      status={statusContact}
                      remove={removeContact}
                      add={addContact}
                    />
                  );
                })} 
              </tbody>
            </table>
          </div>
          <ContactForm add={addContact}></ContactForm>
        </div>
      </div>
    </div>
  );
}

export default ContactList;
