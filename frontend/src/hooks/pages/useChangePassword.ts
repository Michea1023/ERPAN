import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import change_password_request from '../../services/auth/change_password_request'

const INITIAL_VALUE = {
  password: '',
  passwordNew: '',
  passwordConfirm: '',
}

const useChangePassword = () => {
  const [password, setPassword] = useState<{
    password: string
    passwordNew: string
    passwordConfirm: string
  }>(INITIAL_VALUE)

  const navigate = useNavigate()

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    change_password_request(password).then((res) => {
      navigate('/')
    })
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({
      ...password,
      [evt.currentTarget.name]: evt.currentTarget.value,
    })
  }

  return { navigate, handleSubmit, handleChange }
}

export default useChangePassword
