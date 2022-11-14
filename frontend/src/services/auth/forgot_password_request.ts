import {HOST} from '../../settings'

const forgot_password_request = (emailRequest: { email: string }) => {
    return fetch(HOST + 'forgot-password', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: emailRequest.email,
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

export default forgot_password_request
