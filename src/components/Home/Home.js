import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Service from '../Service/Service';
import Skill from '../Skills/Skill';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Skill></Skill>
            <Projects></Projects>
        </div>
    );
};

export default Home;