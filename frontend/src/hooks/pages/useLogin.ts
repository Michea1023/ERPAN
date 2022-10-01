import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import login_request from '../../services/auth/login_request';
import {Business_Login} from "../../types/request_types";

const INITIAL_VALUE = {
    email: "",
    password: ""
}

interface Props {
    handleBusiness: (new_business: {name: string, logged: boolean}) => void
}

const useLogin = ({handleBusiness}: Props) => {
    const [business,setBusiness] = useState<Business_Login>(INITIAL_VALUE)
    const navigate = useNavigate()

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        login_request(business).then((res)=>{
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

    return {navigate,handleSubmit,handleChange}
}
export default useLogin