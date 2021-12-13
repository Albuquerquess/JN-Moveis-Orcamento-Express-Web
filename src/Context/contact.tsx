import React from 'react';
import usePersistedState from '../Hooks/usePersistentSate';
// Types
import { formContactSchema } from '../Types/forms'

type contactInitialState = {
  email: string,
  fullname: string,
  phone: string,
  setEmail(email: string): void,
  setFullname(email: string): void,
  setPhone(email: string): void,
}
export const ContactContext  = React.createContext({} as contactInitialState)

export const ContactProvider: React.FC = ({children}) => {
  const [email, setEmail] = usePersistedState('email', null)
  const [fullname, setFullname] = usePersistedState('fullname', null)
  const [phone, setPhone] = usePersistedState('phone', null)

  return <ContactContext.Provider value={{
    email,
    setEmail,
    fullname,
    setFullname,
    phone,
    setPhone
  }}>
    {children}
  </ContactContext.Provider>;
}