import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const inquirySchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Name is required'),
    phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
    email: yup
    .string()
    .email()
    .required('Email is required'),
    inquiry: yup
    .string()
    .max(1000, 'Please let us know how we can help in 1000 characters or less')
})

export default inquirySchema;