import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import inquirySchema from '../inquirySchema';

const initialFormValues = {
    name: '',
    phoneNumber: '',
    email: '',
    inquiry: ''
};

const Contact = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState('');
    const [disablo, setDisablo] = useState(true);

    useEffect(() => {
        if (formValues.name
             && formValues.phoneNumber
              && formValues.email
               && formValues.inquiry) {
            inquirySchema
            .isValid(formValues)
            .then((valid) => setDisablo(!valid));
        } else {
            setDisablo(true)
        }
    }, [formValues]);

    const changer = (e) => {
        yup.reach(inquirySchema, e.target.name)
            .validate(e.target.value)
            .then(() => {
                setFormErrors({...formErrors, [e.target.name]: ''})
            })
            .catch(err => {
                setFormErrors({...formErrors,
                     [e.target.name]: err.errors[0]})
            });
        setFormValues({...formValues, [e.target.name]:e.target.value});
    };

    return (
        <div>
            <h4>If you have any customer service related inquires please feel free to reach out to us. We will get back to you as soon as possible, thank you!</h4>
            <form>
                <label>Your Name *
                <input
                 type='text'
                  name='name'
                   value={formValues.name}
                    onChange={changer}/>
                    <div>{formErrors.name}</div>
                </label>
                <label>Your Phone Number *
                <input
                 type='text'
                  name='phoneNumber'
                   value={formValues.phoneNumber}
                    onChange={changer}/>
                    <div>{formErrors.phoneNumber}</div>
                </label>
                <label> Your Email *
                <input
                 type='email'
                  name='email'
                   value={formValues.email}
                    onChange={changer}/>
                    <div>{formErrors.email}</div>
                </label>
                <label>How can we assist you *
                <input
                 type='text'
                  name='inquiry'
                   value={formValues.inquiry}
                    onChange={changer}/>
                    <div>{formErrors.inquiry}</div>
                </label>
                <button disabled={disablo}>Submit</button>
            </form>
        </div>
    )
}

export default Contact
