import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../Components/Button';
// Components
import Form from '../../Components/Form/Form';
import Input from '../../Components/Form/Input';
// baseURLs
import { contactBaseURLs } from '../../Consts/baseURLs';
// Context
import { ContactContext } from '../../Context/contact';
import { FurnitureContext } from '../../Context/furnitures';
// Schema
import { contactSchema } from '../../Schema/Form/contacInformation';
// Service
import Api from '../../Services/Api/api';
// Types
import { formContactSchema } from '../../Types/forms';
// Styles
import contactStyles from './contact.module.css';

const Contact: React.FC = () => {
  const history = useHistory()
  const contactContext = React.useContext(ContactContext)
  const furnitureContext = React.useContext(FurnitureContext)
  
  const contactInitialValues = () => {
    return {
      fullname:  contactContext.fullname || '',
      email: contactContext.email || '',
      phone: contactContext.phone || '',
    }
  }
  async function saveContactsOnLocalStorage(contact: formContactSchema) {
    contactContext.setEmail(contact.email)
    contactContext.setPhone(contact.phone)
    contactContext.setFullname(contact.fullname)

    const registerLead = await Api.post(contactBaseURLs.registerLeads, {
      email: contact.email,
      name: contact.fullname,
      phone: contact.phone
    })

    if (registerLead.status === 204) {
      return history.push('/orçamento/personalização')
    }
  }


  return <div id={contactStyles.container}>
    <h1>Informações de contato</h1>
    <Form validationSchema={contactSchema} onSubmit={(values) => saveContactsOnLocalStorage(values)} initialValues={contactInitialValues()}>
      <Input type="text" field="fullname" placeholder="Insira o seu nome completo" label="Nome completo: "/>
      <Input type="text" field="phone" placeholder="Insira o seu celular" label="Celular: " />
      <Input type="text" field="email" placeholder="Insira o seu email" label="Email: " />
      <Button type="submit" to="#"/>
    </Form>
  </div>;
}

export default Contact;