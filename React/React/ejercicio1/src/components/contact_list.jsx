import React from 'react';
import ContactComponent from './contact';
import { Contact } from './models/contact.class';



const ContactListComponent = () => {

    const defaultContact = new Contact('shaio', 'antonucci', 'lala@hotmail.com', true)

    return (
        <div>
        <div>
            <h1>Your contact list:</h1>
        </div>
        <div>
            <ContactComponent contact={defaultContact}/>       
        </div>
        </div>
    );
};


export default ContactListComponent;

/*
Componente B: Por otro lado, tenemos el componente B que va a recibir por props un contacto y va a poder cambiar su estado de conectado a desconectado y viceversa.

Si el contacto está conectado, se debe mostrar: Contacto En Línea

Si el contacto no está conectado, se debe mostrar: Contacto No Disponible
*/