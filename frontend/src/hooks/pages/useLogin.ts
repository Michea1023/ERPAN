import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import login_request from '../../services/auth/login_request';
import {Business_Login} from "../../types/request_types";

/*
initial state for login form ('business') entity
 */
const INITIAL_VALUE = {
    email: "",
    password: ""
}

/*
properties of handler of login form
 */
interface Props {
    handleBusiness: (new_business: { name: string, logged: boolean }) => void
}

/**
 *
 * @param handleBusiness
 */
const useLogin = ({handleBusiness}: Props) => {
    const [business, setBusiness] = useState<Business_Login>(INITIAL_VALUE)
    const navigate = useNavigate()

    /*
    logs a business
    @param {React.FormEvent<>} evt -> event obtained when is submitted the login form
     */
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        login_request(business).then((res) => {
            handleBusiness({
                name: res.name_business,
                logged: true
            })
            navigate('/')
        })
    }

    /*
    sets a new login form state
    @param {React.ChangeEvent} evt -> event obtained when is changed the login form
     */
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setBusiness({
            ...business,
            [evt.currentTarget.name]: evt.currentTarget.value
        })
    }

    return {navigate, handleSubmit, handleChange}
}
export default useLogin