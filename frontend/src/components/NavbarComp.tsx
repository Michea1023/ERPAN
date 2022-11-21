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
  handleBusiness: (business: { name: string; logged: boolean }) => void
}

/*
renders the navigation bar
@param {Props} business - params coming from above
@returns {JSX.Element>
 */
export default function NavbarComp({ business, handleBusiness }: Props) {
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
                  <Nav.Link as={Link} to={'/'}>
                    Ventas
                  </Nav.Link>
                  <Nav.Link as={Link} to={'/inventory'}>
                    Inventario
                  </Nav.Link>
                  <Nav.Link as={Link} to={'/SalesHistory'}>
                    Historial
                  </Nav.Link>
                  <Nav.Link as={Link} to={'/changePassword'}>
                    Cambiar Contraseña
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to={'/login'}
                    onClick={() => {
                      logout_request().then((res) => {
                        if (res === undefined) return

                        handleBusiness({
                          name: '',
                          logged: false,
                        })
                      })
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
