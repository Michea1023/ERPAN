import { HOST } from '../../settings'

const change_password_request = (passwordRequest: {
  password: string
  passwordNew: string
  passwordConfirm: string
}) => {
  return fetch(HOST + 'user/change-password', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + String(localStorage.getItem('tokenERPAN')),
    },
    body: JSON.stringify({
      password: passwordRequest.password,
      passwordNew: passwordRequest.passwordNew,
      passwordConfirm: passwordRequest.passwordConfirm,
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error('Error')
      return response.json()
    })
    .catch((error) => {
      alert(error)
    })
    .then((response) => {
      alert(response.mensaje)
      return response
    })
}

export default change_password_request
