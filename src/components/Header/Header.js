import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
                    <Navbar.Brand> <NavHashLink to="/home#banner" style={{ textDecoration: 'none' }}><h2 className='logo'>Pacific<span>Travel Agency</span></h2></NavHashLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">


                        <Nav className="me-auto d-flex justify-content-start align-items-center">
                            <NavHashLink className="nav-link" to='/home#banner'> Home</NavHashLink>

                            <NavHashLink className="nav-link" to='/home#about'> About</NavHashLink>

                            <NavHashLink className="nav-link" to='/home#about'> About</NavHashLink>

                            <NavHashLink className="nav-link" to='/home#blog'> Blog</NavHashLink>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;