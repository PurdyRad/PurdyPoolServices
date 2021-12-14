import React, { useState } from 'react'

const initialFormValues = {
    name: '',
    phoneNumber: '',
    email: '',
    inquiry: ''
}

const Contact = () => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const changer = (e) => {
        setFormValues({formValues: e.target})
    }

    return (
        <div>
            <h4>If you have any customer service related inquires please feel free to reach out to us. We will get back to you as soon as possible, thank you!</h4>
            <form>
                <label>Your Name *</label>
                <input value={formValues.name} onChange={changer}></input>
                <label>Your Phone Number *</label>
                <input value={formValues.phoneNumber} onChange={changer}></input>
                <label> Your Email *</label>
                <input value={formValues.email} onChange={changer}></input>
                <label>How can we assist you *</label>
                <input value ={formValues.inquiry} onChange={changer}></input>
            </form>
        </div>
    )
}

export default Contact
