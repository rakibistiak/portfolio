import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
import img from '../../img/rakib.jpg'
const About = () => {
    return (
        <div id='about'>
            <Container>
            <h3 className="text-center py-5">About me</h3>
            <Row className='about-container'>
                <Col xs={12} md={6}>
                    <figure>
                        <img src={img} alt="Rakib" />
                    </figure>
                </Col>
                <Col xs={12} md={6}>
                    <div>
                        <h4>I'm Rakib Istiak and I'm a Web Developer</h4>
                        <p>I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I love to solve real-world problems. I am strategic, goal-oriented, and always work with an end goal in mind. I pride myself on doing quality work and maintaining excellent communication. Most of the time I work with JavaScript ReactJS</p>
                        <button className="regular-btn"> Hire me </button>
                    </div>
                </Col>
            </Row>
            </Container>

        </div>
    );
};

export default About;