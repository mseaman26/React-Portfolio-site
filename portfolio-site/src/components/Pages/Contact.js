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
          setErrorMessage('Email is invalid');
          return;
        }
        if(!firstName || !lastName){
            setErrorMessage('please provide a first and last name')
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
            <h1>
            Contact
            </h1>
            <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
         <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
        {errorMessage && (
            <div>
            <p className="error-text">{errorMessage}</p>
            </div>
        )}
        </div>
        
    )
}
export default Contact