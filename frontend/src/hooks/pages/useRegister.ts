import React, {useState} from 'react'
import {Business_Register} from "../../types/request_types";
import register_request from "../../services/auth/register_request";
import {useNavigate} from "react-router-dom"

const INITIAL_VALUE = {
    name: "",
    email: "",
    short_name: "",
    password: "",
    password_confirm: ""
}

interface Props {
    handleBusiness: (new_business: {name: string, logged: boolean}) => void
}

const useRegister = ({handleBusiness}: Props) => {
    const [business, setBusiness] = useState<Business_Register>(INITIAL_VALUE)
    const navigate = useNavigate()

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        if (business.password === business.password_confirm)
            register_request(business).then((res) => {
                handleBusiness({
                    name: res.name,
                    logged: true
                })
                navigate('/')
            })
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setBusiness({
            ... business,
            [evt.currentTarget.name]: evt.currentTarget.value
        })
    }

    return {navigate, handleSubmit, handleChange}
}

export default useRegister