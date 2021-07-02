import React from 'react';
import logo from './images/logo.png';
import {Container, Navbar, Nav } from 'react-bootstrap';


const Header = ()=> (
    <header>
        <Container>

        <Navbar expand="lg" collapseOnSelect={true}>

            <img src={logo}  width="200"/>
        </Navbar>
        </Container>
        
        
        
        
    </header>
)



export default Header;
