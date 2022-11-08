import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from './models/contact.class'

function ContactComponent({ contact }) {
  return (
    <div>
        <h2>{contact.name}</h2>
        <h2>{contact.lastname}</h2>
        <h3>{contact.email}</h3>
        <h4>{contact.conected ? 'Online' : 'Offline'}</h4>
    </div>

  )
}

ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contact)
}

export default ContactComponent
 /*
Componente A: Este componente va a tener disponer un Contacto(crea una clase para ello), que va a contar con las siguientes características:

Nombre: que será un String.

Apellido: también un String.

Email: de nuevo un String.

Conectado: será un booleano que nos indicará si la persona está conectada o no.
 */