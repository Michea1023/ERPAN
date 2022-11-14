import React, {useState} from 'react'
import {Business_Register} from "../../types/request_types";
import register_request from "../../services/auth/register_request";
import {useNavigate} from "react-router-dom"

/*
initial state for register form ('business') entity
 */
const INITIAL_VALUE = {
    name: "",
    email: "",
    short_name: "",
    password: "",
    password_confirm: ""
}

/*
properties of handler of register form
 */
interface Props {
    handleBusiness: (new_business: { name: string, logged: boolean }) => void
}

/*
handles the register form page
@param {Props} handleBusiness -> business handler
@returns    {
            Navigate,
            (React.FormEvent<>) => void
            (React.ChangeEvent<>) => void
            }
 */
const useRegister = ({handleBusiness}: Props) => {
    const [business, setBusiness] = useState<Business_Register>(INITIAL_VALUE)
    const navigate = useNavigate()

    /*
    logs a business
    @param {React.FormEvent<>} evt -> event obtained when is submitted the register form
     */
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        // password confirm
        if (business.password !== business.password_confirm) {
            alert("La contraseñas ingresadas no coinciden")
            return
        }
        register_request(business).then((res) => {
            handleBusiness({
                name: res.name_business,
                logged: true
            })
            navigate('/')
        })
    }

    /*
    sets a new login form state
    @param {React.ChangeEvent} evt -> event obtained when is changed the register form
     */
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setBusiness({
            ...business,
            [evt.currentTarget.name]: evt.currentTarget.value
        })
    }

    return {navigate, handleSubmit, handleChange}
}

export default useRegister