import React from "react"
import {useNavigate} from "react-router-dom"

export default function NotFound() {
    const navigate = useNavigate()
    return <div>
        <h2> Esta pagina no existe </h2>
        <a href="" onClick={() => navigate('/')}> Vuelva por aqui </a>
    </div>
}