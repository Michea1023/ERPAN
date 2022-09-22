import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import login_request from '../../services/auth/login_request';
import {Business_Login} from "../../types/request_types";

const INITIAL_VALUE = {
    email: "",
    password: ""

}
const useLogin = () => {
    const [business,setBusiness] = useState<Business_Login>(INITIAL_VALUE)
    const navigate = useNavigate()

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        login_request(business).then((res)=>{
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