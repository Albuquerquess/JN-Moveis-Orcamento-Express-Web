import React from 'react';
// Types
import { formContactSchema } from '../Types/forms'

const contactInitialState = {
  getContactInfo: () => {},
  setContactInfo: (contact: formContactSchema) => {}
}
export const ContactContext  = React.createContext(contactInitialState)

export const ContactProvider: React.FC = ({children}) => {
  const [contact, setContact] = React.useState({
    email: '',
    fullName: '',
    phone: '',
  })

  function getContactInfo() {
    return contact
  }

  function setContactInfo({email, phone, fullName}: formContactSchema) {
    setContact({
      email,
      phone,
      fullName,
    })
  }

  return <ContactContext.Provider value={{getContactInfo, setContactInfo}}>
    {children}
  </ContactContext.Provider>;
}