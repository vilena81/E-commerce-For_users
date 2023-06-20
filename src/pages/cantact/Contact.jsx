
import React, { useRef } from 'react';
import './contact.css';
import ProdBar from '../product/ProdBar';
import Footer from '../../components/footer/Footer';

const Contact = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    try {
      await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      alert('Email sent successfully');
    } catch (error) {
      console.log('Error sending email:', error);
      alert('An error occurred while sending the email');
    }
  };

  return (
    <div>

    <ProdBar/>
    <div className="containerContact">
      
      <h1>Contact us</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="firstName" id="nameLabel">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="firstName"
            ref={firstNameRef}
            tabIndex={1}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="lastName"
            ref={lastNameRef}
            tabIndex={2}
          />
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="email"
          placeholder="example@gmail.com"
          ref={emailRef}
          tabIndex={3}
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          className="message"
          placeholder="Start typing..."
          ref={messageRef}
        ></textarea>
        <button type="submit" className="send">
          Send
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
