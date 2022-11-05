import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import logout_request from '../services/auth/logout_request'

/*
properties of the navigation bar
 */
interface Props {
  business: { name: string; logged: boolean }
}

/*
renders the navigation bar
@param {Props} business - params coming from above
@returns {JSX.Element>
 */
export default function NavbarComp({ business }: Props) {
  return (
    <div>
      <Navbar bg='dark' variant={'dark'} expand='xl'>
        <Container className='w-100 ms-auto'>
          <Navbar.Brand as={Link} to={'/'}>
            ERPAN
          </Navbar.Brand>
          {business.logged ? (
            <>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                  <Nav.Link as={Link} to={'/order'}>
                    Ventas
                  </Nav.Link>
                  <Nav.Link as={Link} to={'/'}>
                    Inventario
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to={'/login'}
                    onClick={() => {
                      business.name = ''
                      business.logged = false
                      logout_request().then()
                    }}
                  >
                    Cerrar Sesion
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          ) : (
            <></>
          )}
        </Container>
      </Navbar>
    </div>
  )
}
