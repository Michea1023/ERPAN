import React from 'react'
import useRegister from "../hooks/pages/useRegister";
import "../static/css/style.css";


interface Props {

}

export default function Register () {
    const {navigate, handleSubmit, handleChange} = useRegister();

    return (<>
    
   
   
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registrarse</h3>
          <div className="form-group mt-3">
            <label>Usuario</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Ingrese usuario"
            />
          </div>
          <div className="form-group mt-3">
            <label>Apodo</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Ingrese Apodo"
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
          <div className="form-group mt-3">
            <label>Repetir Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Repetir contraseña"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Registrase
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
           Ya tienes una <a href="#">Cuenta?</a>
          </p>
        </div>
      </form>
    </div>
    
    </>)
}