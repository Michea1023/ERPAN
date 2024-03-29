import React, {Component} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    Link
  } from "react-router-dom";

interface Props {
    business: { name: string, logged: boolean }
}

export default function NavbarComp ({business}: Props) {
    return (
        <div>
            <Navbar bg="dark" variant={"dark"} expand="xl">
                <Container className="w-100 ms-auto">
                    <Navbar.Brand as={Link} to={"/"}>ERPAN</Navbar.Brand>
                    {business.logged ?
                        <><Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/"}>Ventas</Nav.Link>
                                <Nav.Link as={Link} to={"/inventory"}>Inventario</Nav.Link>
                            </Nav>
                        </Navbar.Collapse></>:
                        <></>
                    }
                </Container>
            </Navbar>
        </div>
    )

}