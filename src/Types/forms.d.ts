// Contacts
export interface formContactSchema {
    email: string
    fullname: string
    phone: string
}

export interface contactProps {
    initialValues: formContactSchema
    onSubmit: (values: any, actions: any) => void
    validationSchema: Object
}

export interface inputProps {
    type: string
    label: string
    field: string
    placeholder: string,
}

export interface formError {
    errors: { [key: string]: string }
}

//