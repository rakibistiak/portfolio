import React, { useEffect, useState } from 'react';
import { Container, ProgressBar } from 'react-bootstrap';

const Skill = () => {
    const [skills,setSkills] = useState([])
    useEffect(()=>{
        fetch('/skills.json')
        .then(res=>res.json())
        .then(data=>setSkills(data))
    },[])
    return (
        <div>
            <Container id='skill'>
            <h3 className="text-center section-title" data-aos='fade-left' data-aos-duration='800'>My Skills</h3>
            {
                skills.map(skill=>{
                    return(
                        <div className="pt-3" key={skill?.id}>
                            <h5>{skill?.title}</h5>
                            <ProgressBar style={{height:'30px'}}
                            now={skill?.now}
                            label={`${skill?.now}%`}
                            variant={skill?.variant}
                            />
                        </div>
                    );
                })
            }
            </Container>
        </div>
    );
};

export default Skill;