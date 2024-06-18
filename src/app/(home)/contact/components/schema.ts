import * as yup from "yup";


export const contactSchema = yup.object().shape({
    firstname: yup.string().required('first name is required'),
    lastname: yup.string().required('lastname is required'),
    email: yup.string().required('email is required'),
    phone: yup.string().required('phone is required'),
    message: yup.string().optional()
})