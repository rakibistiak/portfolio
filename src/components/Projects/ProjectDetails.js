import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import { BsLink45Deg } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import './Projects.css';

const ProjectDetails = () => {
    const navigate = useNavigate();
    const id = useParams();
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch('/projects.json')
        .then(res=> res.json())
        .then(data=> setProjects(data))
    },[]);
    const project = projects.find(project=> project.id === parseInt(id.id));
    const goBack = () =>{
        navigate(-1)
    };
    return (
        <Container className='my-5 single-project-container'>
            <h3 className='text-center text-success py-4'>{project?.title}</h3>
            <Row className='g-4 d-flex align-items-center p-4'>
                <Col xs={12} md={6} lg={4}>
                <figure>
                    <img className='img-fluid border border-5' src={project?.img1} alt="" />
                </figure>
                </Col>
                <Col xs={12} md={6} lg={4}>
                <figure>
                    <img className='img-fluid border border-5' src={project?.img2} alt="" />
                </figure>
                </Col>
                <Col xs={12} md={6} lg={4}>
                <figure>
                    <img className='img-fluid border border-5' src={project?.img3} alt="" />
                </figure>
                </Col>
            </Row>

            <h6 className='text-center mb-3'>Technology Used : <span style={{fontSize:'15px'}}>{project?.tech}</span></h6>

            <div className="d-flex justify-content-center project-link">
                <a href={project?.clinetCode} target='_blank' rel="noreferrer">
                    <FaCode style={{marginRight:'8px', fontSize:'20px'}}/>Client Code
                    </a>
                {   project?.serverCode &&
                    <a href={project?.serverCode} target='_blank' rel="noreferrer">
                        <FaServer style={{marginRight:'8px', fontSize:'20px'}}/>Server Code
                        </a>
                }
                <a href={project?.liveLink} target='_blank' rel="noreferrer">
                    <BsLink45Deg style={{marginRight:'8px', fontSize:'20px'}}/>Link Link
                </a>
            </div>
            <Row className='p-4'>
                <Col sx={12}>
                    <p>{project?.description}</p>
                </Col>
            </Row>
            <div className="text-center">
            <button className="regular-btn mb-4" onClick={goBack}>Go Back</button>
            </div>
        </Container>
    );
};

export default ProjectDetails;