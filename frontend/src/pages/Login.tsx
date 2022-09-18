import React from 'react'
import useLogin from '../hooks/pages/useLogin';

export default function Login(){
    const {navigate,handleSubmit,handleChange} = useLogin();

    return <div id={"login"}>
        <h2 id={"subtitle"}>LOGIN</h2>
        <form onSubmit={handleSubmit}>
            <input type={"text"} name={"email"} placeholder={"email"} 
                onChange={handleChange} required/>
            <input type={"text"} name={"password"} placeholder={"password"} 
                onChange={handleChange}  required/>
            <button type={"submit"}>LOGIN</button>
        </form>
        <legend>I dont have an account</legend>
        <button type={"button"} onClick={()=>navigate('/register')}>REGISTER</button>
    </div>
}