import {Business_Login} from "../../types/request_types";
import {Business_Response} from "../../types/response_types";
import {HOST} from "../../settings";

const login_request = () => {
    return fetch(HOST + 'login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + String(localStorage.getItem("tokenERPAN"))
        },
    }).then(response => {
        if (!response.ok) throw new Error("Error")
        return response
    }).catch(() => {
        window.localStorage.removeItem("tokenERPAN")
        window.localStorage.removeItem("nameERPAN")
    })
}

export default login_request