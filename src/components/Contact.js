import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import inquirySchema from '../inquirySchema';
import styled from 'styled-components';

const initialFormValues = {
    name: '',
    phoneNumber: '',
    email: '',
    inquiry: ''
};

const FormHolder = styled.form`
display: flex;
flex-direction: column;
align-content: space-between;
max-width: 400px;
margin: 0 auto;
text-align: center;
`;

const Label = styled.label`
text-align: left;
display: block;
`;

const Input = styled.input`
width: 100%;
padding: 6px 10px;
margin: 10px 0;
border: 1px solid #ddd;
box-sizing: border-box;
display: block;
`;
const Textarea = styled.textarea`
width: 100%;
padding: 6px 10px;
margin: 10px 0;
border: 1px solid #ddd;
box-sizing: border-box;
display: block;
`;

const Header = styled.h4`
margin-bottom: 30px;
font-size: 1.3em;
`;

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
            <Header>If you have any customer service related inquires please feel free to reach out to us. We will get back to you as soon as possible, thank you!</Header>
            <FormHolder>
                <div>
                    <Label>Your Name *
                        <Input
                        type='text'
                        name='name'
                        value={formValues.name}
                        onChange={changer}/>
                    </Label>
                    <div>{formErrors.name}</div>
                </div>
                <div>
                    <Label>Your Phone Number *
                        <Input
                        type='text'
                        name='phoneNumber'
                        value={formValues.phoneNumber}
                        onChange={changer}/>
                    </Label>
                    <div>{formErrors.phoneNumber}</div>
                </div>
                <div>
                    <Label> Your Email *
                        <Input
                        type='email'
                        name='email'
                        value={formValues.email}
                        onChange={changer}/>
                    </Label>
                    <div>{formErrors.email}</div>
                </div>
                <div>
                    <Label>How can we assist you *
                        <Textarea
                        type='text'
                        name='inquiry'
                        value={formValues.inquiry}
                        onChange={changer}/>
                    </Label>
                    <div>{formErrors.inquiry}</div>
                    <button disabled={disablo}>Submit</button>
                </div>
            </FormHolder>
        </div>
    )
}

export default Contact
