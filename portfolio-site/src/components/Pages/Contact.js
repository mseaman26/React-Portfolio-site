import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'
import emailjs from 'emailjs-com'

function Contact() {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('Gmail', 'template_x04vxpm', e.target, 'u1xtN4l27HdhYjBd0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    

        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'firstName') {
          setFirstName(inputValue);
        } else if (inputType === 'lastName'){
          setLastName(inputValue);
        } else {
          setMessage(inputValue)
        }
        //template_x04vxpm
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
        if(!message){
          setErrorMessage('your message cannot be blank!')
          return
        }
        
        emailjs.sendForm('Gmail', 'template_x04vxpm', e, 'u1xtN4l27HdhYjBd0')
        .then((result) => {
          console.log(result.text);
          }, (error) => {
          console.log(error.text);
          });
          e.target.reset()

        setFirstName('');
        setLastName('');
        setEmail('');
        setErrorMessage('')
        setMessage('')
        alert(`message sent!`);
    
      };

    return (
        <div id='conact_page'>
           
            <div id='contact_form_div'>
                <div className='contact_header_div'>
                  <h1 id='contact_header'>
                  Contact Michael Seaman
                  </h1>
                </div>
                  
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
                
                />
                <br/>
                <input
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your message here"
                className='contact_form_item'
                rows='4'
                />
                <br/>
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