import {Business_Register} from "../../types/request_types";
import {Business_Response} from "../../types/response_types";
import {HOST} from "../../settings";

/*
send a request [POST] to HOST/register for register to the system
@param {Business_Login} business -> login-business' data
@returns {Promise<Business_Response>}
*/
const register_request = (business: Business_Register): Promise<Business_Response> => {
    return fetch(HOST + 'register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name_business": business.name,
            "email": business.email,
            "short_name": business.short_name,
            "password": business.password,
            "password_confirm": business.password_confirm
        })
    }).then(response => {
        if (!response.ok) throw new Error("Error")
        return response.json()
    }).then((response: Business_Response) => {
        window.localStorage.setItem("tokenERPAN", response.token)
        window.localStorage.setItem("nameERPAN", response.name_business)
        return response
    }).catch(() => {
        alert("No se pudo registrar")
        return {token: "", name_business: ""}
    })
}

export default register_request