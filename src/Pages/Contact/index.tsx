import React from 'react';
import { useHistory } from 'react-router-dom'
// Components
import Form from '../../Components/Form/Form'
import Input from '../../Components/Form/Input'
import Button from '../../Components/Button'
// Schema
import { contactSchema } from '../../Schema/Form/contacInformation'
// initialValues
import { contactInitialValues } from '../../InitialValues/contactInitialValues'
// Styles
import contactStyles from './contact.module.css'
// Types
import { formContactSchema } from '../../Types/forms'
// Context
import { ContactContext } from '../../Context/contact'
// Service
import Api from '../../Services/Api/api'
// baseURLs
import { contactBaseURLs } from '../../Consts/baseURLs'

const Contact: React.FC = () => {
  const history = useHistory()
  const contactContext = React.useContext(ContactContext)
  async function onSubmit(contact: formContactSchema) {
    contactContext.setContactInfo(contact)

    const registerLead = await Api.post(contactBaseURLs.registerLeads, {
      email: contact.email,
      name: contact.fullName,
      phone: contact.phone
    })

    if (registerLead.status === 204) {
      return history.push('/orçamento/personalização')
    }
  }
  return <div id={contactStyles.container}>
    <h1>Informações de contato</h1>
    <Form validationSchema={contactSchema} onSubmit={(values) => onSubmit(values)} initialValues={contactInitialValues}>
      <Input type="text" field="fullName" placeholder="Insira o seu nome completo" label="Nome completo: " />
      <Input type="text" field="phone" placeholder="Insira o seu celular" label="Celular: " />
      <Input type="text" field="email" placeholder="Insira o seu email" label="Email: " />
      <Button type="submit" to="#"/>
    </Form>
  </div>;
}

export default Contact;