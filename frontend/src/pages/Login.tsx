import React from 'react'
import useLogin from '../hooks/pages/useLogin'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import '../static/css/style.css'

/*
properties of the login page
 */
interface Props {
  handleBusiness: (new_business: { name: string; logged: boolean }) => void
}

/*
renders the login form
@param {Props} handleBusiness - params coming from above
@returns {JSX.Element}
*/
export default function Login({ handleBusiness }: Props) {
  const { navigate, handleSubmit, handleChange } = useLogin({ handleBusiness })

  return (
    <>
      <div className='Auth-form-container'>
        <form className='Auth-form' onSubmit={handleSubmit}>
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>Iniciar Sesion</h3>
            <div className='form-group mt-3'>
              <label>Email</label>
              <input
                type='text'
                className='form-control mt-1'
                name={'email'}
                placeholder='Ingrese su correo*'
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group mt-3'>
              <label>Contraseña</label>
              <input
                type='password'
                className='form-control mt-1'
                name={'password'}
                placeholder='Ingrese contraseña*'
                onChange={handleChange}
                required
              />
            </div>
            <div className='d-grid gap-2 mt-3'>
              <button type='submit' className='btn btn-primary'>
                Iniciar
              </button>
            </div>
            <div className='row mt-3'>
              <p className='col forgot-password text-right mt-2'>
                <a href='#' onClick={() => navigate('/forgotPassword')}>
                  ¿Olvidaste tu contraseña?
                </a>
              </p>
              <div className='d-grid gap-2 '>
                <button type='submit' className='btn btn-success '>
                  <a
                    href='#'
                    className='badge'
                    onClick={() => navigate('/register')}
                  >
                    Registrarse
                  </a>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
