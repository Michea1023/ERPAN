import React, {Component} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default class NavbarComp extends Component {
    render(){
        return (
            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Container className="w-100 ms-auto">
                        <Navbar.Brand as={Link} to={"/"}>ERPAN</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/login"}>Ventas</Nav.Link>
                                <Nav.Link as={Link} to={"/register"}>Inventario</Nav.Link>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}