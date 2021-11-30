import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Service.css';
const Service = () => {
    const [ services, setServices ] = useState([])
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [setServices]);
    return (
        <Container id='service'>
                <h3 className="text-center py-5 section-title" data-aos='fade-left' data-aos-duration='800'>My Services</h3>
            <Row xs={1} md={2} lg={3} className="g-4 pb-5">
                {
                services.map(service => {
                    const { id, title, description, img } = service || {};
                    return (
                        <Col key={id} data-aos="zoom-in">
                            <Card className='h-100 service-column'>
                                <Card.Img className='service-img' variant="top" src={img}/>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        {description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })
                }
            </Row>
        </Container>
    );
};

export default Service;