import React from 'react'
import useLogin from '../hooks/pages/useLogin';
import {Form,Button,Col,Container,Row} from "react-bootstrap"
import "../static/css/style.css";


export default function Login(){
    const {navigate,handleSubmit,handleChange} = useLogin();

    return (
    
    <>
     <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Iniciar Sesion</h3>
          <div className="form-group mt-3">
            <label>Usuario</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Ingrese contraseña"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingrese contraseña"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Iniciar
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
             <a href="#">Registrarse?</a>
          </p>
        </div>
      </form>
    </div>
           
    </>)
}