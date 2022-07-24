import React from 'react'
import PropTypes from 'prop-types'
import {Contact} from './contacto.class'

const ContactoComponent = ({contact}) => {
  return (
    <div>
     <h2>{contact.surname},{contact.name}</h2>
     <h3>{contact.email}</h3>
     <h3>{contact.connected ? 'Conectado' : 'Desconectado'}</h3>
    </div>
  );
};

ContactoComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

export default ContactoComponent;