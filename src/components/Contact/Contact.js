import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, Form } from 'react-bootstrap';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kd3tw3m', 'template_d2ule2o', form.current, 'user_O1UWdGIEI27rUUDWgiHPz')
      .then((result) => {
        alert("Your message send successfully");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container className='w-50 mx-auto'>
      <form ref={form} onSubmit={sendEmail}>

        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="text" name='name' placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name='useremail' placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" name='message' rows={3} />
        </Form.Group>
        <button className='regular-btn' type="submit">
            Send
        </button>
                  
    </form>
    </Container>
  );
};
export default Contact