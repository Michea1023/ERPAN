import {HOST} from "../../settings";

/*
send a request [POST] to HOST/logout for logout from the system
@returns {Promise}
*/
const logout_request = () => {
    return fetch(HOST + 'logout', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + String(localStorage.getItem("tokenERPAN"))
        }
    }).then(response => {
        if (!response.ok) throw new Error(response.statusText)
        window.localStorage.removeItem("tokenERPAN")
        window.localStorage.removeItem("nameERPAN")
        return response
    }).catch((error) => {
        alert(error)
    })
}

export default logout_request