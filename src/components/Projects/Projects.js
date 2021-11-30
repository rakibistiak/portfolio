import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import './Projects.css'
const Projects = () => {
    const navigate = useNavigate()
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch('/projects.json')
        .then(res=> res.json())
        .then(data=> setProjects(data))
    },[]);
    const handleDetails = (id) =>{
        navigate(`project/${id}`)
    }
    return (
        <Container className='my-5 projet-container'>
            <Row className='g-4 p-4'>
                <h2 className='text-center py-5'>My Recent Projects</h2>
                {
                    projects.map(project=>{
                        return(
                            <Col key={project?.id} xs={12}md={6} lg={6} className='single-column'>
                                <div>
                                    <figure>
                                        <img className='project-img p-3' src={project?.img} alt="" />
                                        <h4 className='text-center'>{project?.title}</h4>
                                        <div className="text-center">
                                        <button onClick={()=>handleDetails(project?.id)} className='regular-btn details-btn'>Details</button>
                                        </div>
                                    </figure>
                                </div>
                            </Col>
                        );
                    })
                }
            </Row>
        </Container>
    );
};

export default Projects;