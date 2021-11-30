import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
import img from '../../img/emon-bg.png'
import { NavHashLink } from 'react-router-hash-link';
const About = () => {
    return (
        <div id='about'>
            <Container>
                <Row className='about-container'>
                    <Col xs={12} md={6}>
                        <figure>
                            <img className='img-fluid' src={img} alt="Rakib" />
                        </figure>
                    </Col>
                    <Col xs={12} md={6} className='d-flex align-items-center'>
                        <div>
                            <h1 className="text-center py-5 section-title" data-aos='fade-left' data-aos-duration='800'>About me</h1>
                            <div data-aos='fade-up'>
                            <h4 className="section-subtitle">I'm Rakib Istiak and I'm a Web Developer</h4>
                            <p className="section-desc">I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I love to solve real-world problems. I am strategic, goal-oriented, and always work with an end goal in mind. I pride myself on doing quality work and maintaining excellent communication. Most of the time I work with JavaScript ReactJS</p>
                            <NavHashLink to='/home#contact'> <button className="regular-btn"> Hire me </button></NavHashLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default About;