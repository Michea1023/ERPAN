import React from 'react'
import useRegister from "../hooks/pages/useRegister";

interface Props {

}

export default function Register () {
    const {navigate, handleSubmit, handleChange} = useRegister();

    return <div id={"register"}>
        <h2 id={"subtitle"}>REGISTER</h2>
        <form onSubmit={handleSubmit}> {/*Ocurre cuando se presiona el boton*/}
            <input type={"text"} name={"name"} placeholder={"name"}
                   onChange={handleChange} required/>
            <input type={"text"} name={"email"} placeholder={"email"}
                   onChange={handleChange} required/>
            <input type={"text"} name={"short_name"} placeholder={"short name"}
                   onChange={handleChange}/>
            <input type={"password"} name={"password"} placeholder={"password"}
                   onChange={handleChange} required/>
            <input type={"password"} name={"password_confirm"} placeholder={"password_confirm"}
                   onChange={handleChange} required/>
            <button type={"submit"}> REGISTER </button>
        </form>
        <legend>Do you have an Account</legend>
        <button type={"button"} onClick={() => navigate('/login')}>LOGIN</button>
    </div>
}