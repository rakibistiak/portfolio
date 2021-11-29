import React from 'react';
import jsPDF from 'jspdf'
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FaHackerrank } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../img/rakib.jpg';
import resume from '../../img/Rakib Istiak Resume.pdf'
import './Banner.css'
const Banner = () => {
    const pdfGenerator = () => {
        const doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.loadFile(resume, true)
        // Open this pdf in a new Window
        // window.open(doc.output('dataurlnewwindow'),resume, '_blank');

        // Save the pdf
        doc.save('Rakib Istiak Resume.pdf')
    }
    return (
        <div className='banner-container' id='banner'>
            <Container>
                <Row className='min-vh-100 d-flex justify-content-center align-items-center'>
                    <Col xs={12} md={6}>
                        <figure>
                            <img className='img-fluid rounded-circle' src={img} alt="Rakib" />
                        </figure>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='banner-text'>
                            <h5>HI THERE! I'M</h5>
                            <h2 className='name'>MD RAKIB ISTIAK</h2>
                            <h6>I'm a web developer with a focus on the <span>MERN stack</span>, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!</h6>
                            <div>
                                <button className='regular-btn rounded-pill' onClick={pdfGenerator}>Download Resume</button>
                                <Link to="https://www.linkedin.com/in/rakibistiak/"><AiFillLinkedin className='icon'/></Link> |{" "}
                                <Link to='https://github.com/rakibistiak' target="_blank"><AiFillGithub className='icon'/></Link>
                                <Link to='https://www.hackerrank.com/rakibistiak?hr_r=1' target="_blank"><FaHackerrank className='icon'/></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;