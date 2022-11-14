import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import forgotPassword_request from '../../services/auth/forgot_password_request'

const INITIAL_VALUE = {
    email: '',
}

const useForgotPassword = () => {
    const [emailConfirm, setEmailConfirm] = useState<{ email: string }>(
        INITIAL_VALUE
    )
    const navigate = useNavigate()

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        forgotPassword_request(emailConfirm).then((res) => {
            navigate('/passwordRecovery')
        })
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setEmailConfirm({
            ...emailConfirm,
            [evt.currentTarget.name]: evt.currentTarget.value,
        })
    }

    return {navigate, handleSubmit, handleChange}
}

export default useForgotPassword
