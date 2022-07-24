import React from 'react'
import {Contact} from '../contacto.class'
import ContactoComponent from '../contacto'
const ContactList = () => {
    const contact = new Contact('Paco', 'Perez', 'email', false );
    
  return (
    <div>
    <ContactoComponent contact={contact}></ContactoComponent>
    </div>
  );
};


export default ContactList;
