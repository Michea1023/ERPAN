import React from 'react'
import useRegister from "../hooks/pages/useRegister";
import "../static/css/style.css";


interface Props {
    handleBusiness: (new_business: {name: string, logged: boolean}) => void
}

export default function Register ({handleBusiness}: Props) {
    const {navigate, handleSubmit, handleChange} = useRegister({handleBusiness});

    return (<>
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Registrarse</h3>
                    <div className="form-group mt-3">
                        <label>Nombre del Negocio</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            name={"name"}
                            placeholder="Ingrese su nombre*"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            name={"email"}
                            placeholder="Ingrese su Correo*"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Nombre Corto del Negocio</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            name={"short_name"}
                            placeholder="Ingrese su nombre corto"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            name={"password"}
                            placeholder="Ingrese contraseña*"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Repetir Contraseña</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            name={"password_confirm"}
                            placeholder="Repetir contraseña*"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Registrase
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Ya tienes una <a href="#" onClick={() => navigate('/login')}>Cuenta?</a>
                    </p>
                </div>
            </form>
        </div>

    </>)
}