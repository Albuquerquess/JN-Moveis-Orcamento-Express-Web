import * as Yup from 'yup'

export const contactSchema = Yup.object().shape({
    email: Yup.string()
        .required('Informe o email')
        .email('Informe um email válido'),
    fullname: Yup.string()
        .required('Informe um nome completo')
        .min(5, 'O nome deve ter no minimo 5 caracteres')
        .max(100, 'O nome deve ter no máximo 100 caracteres')
        .notOneOf(['admin', 'administrador'], 'Nome inválido'),
    phone: Yup.string()
        .required('Informe um número de telefone completo')
        .length(11, 'O número de telefone deve conter 11 caracteres numéricos. Ex: (84) 9 9646-5565')
})