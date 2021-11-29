import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
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
        </div>
    );
};

export default Home;