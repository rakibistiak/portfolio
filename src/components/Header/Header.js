import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './Header.css'
const Header = () => {
    // Style when the page active
    // const activeStyle = {
    //     color: "#fff",
    //     backgroundColor: '#F15D30'
    // }
    return (
        <div>
            <Navbar collapseOnSelect style={{ backgroundColor: '#E3E3E3' }} expand="lg" fixed='top' >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">


                        <Nav className="mx-auto d-flex justify-content-start align-items-center">
                            <NavHashLink className="nav-link" to='/home#banner'> Home</NavHashLink>

                            <NavHashLink className="nav-link" to='/home#about'> About</NavHashLink>

                            <NavHashLink className="nav-link" to='/home#service'> Service</NavHashLink>

                            <NavHashLink className="nav-link" to='/home#skill'> Skill</NavHashLink>

                            <NavHashLink className="nav-link" to='/home#project'> Project</NavHashLink>

                            <NavLink className="nav-link text-dark" to='/blog'>Blog</NavLink>

                            <NavHashLink className="nav-link" to='/home#contact'> Contact</NavHashLink>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;