import React, {useState} from 'react'
import {Business} from "../../types/request_types";
import register_request from "../../services/auth/register_request";
import {useNavigate} from "react-router-dom"

const INITIAL_VALUE = {
    name: "",
    email: "",
    short_name: "",
    password: "",
    password_confirm: ""
}


const useRegister = () => {
    const [business, setBusiness] = useState<Business>(INITIAL_VALUE)
    const navigate = useNavigate()

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        register_request(business).then((res) => {
            navigate('/')
        })
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setBusiness({
            ... business,
            [evt.currentTarget.name]: evt.currentTarget.value //nombre: valor xd
        })
    }

    return {navigate, handleSubmit, handleChange}
}

export default useRegister