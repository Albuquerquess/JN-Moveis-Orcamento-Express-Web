import React from 'react';
import usePersistedState from '../Hooks/usePersistentSate';
// Types
import { formContactSchema } from '../Types/forms'

const contactInitialState = {
  getContactInfo: () => {},
  setContactInfo: (contact: formContactSchema) => {}
}
export const ContactContext  = React.createContext(contactInitialState)

export const ContactProvider: React.FC = ({children}) => {
  const [email, setEmail] = usePersistedState('email', null)
  const [fullname, setFullname] = usePersistedState('fullname', null)
  const [phone, setPhone] = usePersistedState('phone', null)
  // Fazer 3 states com as informações de email, nome completo e telefone e armazenar os dados dentro deles
  function getContactInfo() {

    return {email, fullname, phone}
  }

  function setContactInfo({email, phone, fullname}: formContactSchema) {

    setEmail(email)
    setFullname(fullname)
    setPhone(phone)

  }

  return <ContactContext.Provider value={{getContactInfo, setContactInfo}}>
    {children}
  </ContactContext.Provider>;
}