import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import './Projects.css'
const Projects = () => {
    const navigate = useNavigate()
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);
    const handleDetails = (id) => {
        navigate(`project/${id}`)
    }
    return (
        <Container className='my-5 projet-container' id='project'>
            <h2 className='text-center py-5 section-title' data-aos='fade-left' data-aos-duration='800'>My Recent Projects</h2>
            <div className="project-row">
                {
                    projects.map(project => <div data-aos="fade-down" data-aos-duration='800' key={project?.id} className='single-column border border-3'>
                        <figure>
                            <img className='project-img p-3' src={project?.img} alt="" />
                        </figure>
                        <h4 className='text-center'>{project?.title}</h4>
                        <div className="text-center">
                            <button onClick={() => handleDetails(project?.id)} className='regular-btn mb-3'>Details</button>
                        </div>
                    </div>
                    )
                }
            </div>
        </Container>
    );
};

export default Projects;