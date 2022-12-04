import React, { useState } from 'react';
import { checkPassword, validateEmail } from '../../utils/helpers'

function Contact() {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    

        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'firstName') {
          setFirstName(inputValue);
        } else {
          setLastName(inputValue);
        }
      };
      const handleFormSubmit = (e) => {

        e.preventDefault();
        if (!validateEmail(email)) {
          setErrorMessage('!!!Email is invalid');
          return;
        }
        if(!firstName || !lastName){
            setErrorMessage('!!!please provide a first and last name')
            return
        }
        alert(`message sent!`);

        setFirstName('');
        setLastName('');
        setEmail('');
        setErrorMessage('')
    
        // setformInfo({email: "",userName: "",password: "",errorMessage: "" })
      };

    return (
        <div id='conact_page'>
           
            <div id='contact_form_div'>
                <h1 id='contact_header'>
                Contact Michael Seaman
                </h1>
                <form className="form">
                <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
                className='contact_form_item'
                /><br/>
                <input
                value={firstName}
                name="firstName"
                onChange={handleInputChange}
                type="text"
                placeholder="First Name"
                className='contact_form_item'
                /><br/>
                <input
                value={lastName}
                name="lastName"
                onChange={handleInputChange}
                type="text"
                placeholder="Last Name"
                className='contact_form_item'
                /><br/>
                <button type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
                {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
         
        </div>
        
    )
}
export default Contact