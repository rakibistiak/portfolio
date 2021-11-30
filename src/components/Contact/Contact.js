import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillPhone } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';

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
    <Container className=' mb-5' id='contact'>
      <Row>
        <h2 className="text-center py-4 section-title" data-aos='fade-left' data-aos-duration='800'>Contact me </h2>
        <Col xs={12} md={6} className='d-flex flex-column align-items-center' data-aos="fade-right" data-aos-duration='800'>
          <div>
            <h6><AiOutlineMail style={{marginRight:'8px', fontSize:'20px'}}/> rakibemon03@gmail.com</h6>
            <h6><AiFillPhone style={{marginRight:'8px', fontSize:'20px'}}/> 01787134844</h6>
            <h6><AiFillFacebook style={{marginRight:'8px', fontSize:'20px'}}/> Md Rakib Istiak</h6>
          </div>
        </Col>
        <Col xs={12} md={6} data-aos="fade-left" data-aos-duration='800'>
          <form ref={form} onSubmit={sendEmail}>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" name='name' placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" name='user_email' placeholder="Enter email" />
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
        </Col>
      </Row>
    </Container>
  );
};
export default Contact