import {Business_Login} from "../../types/request_types";
import {Business_Response} from "../../types/response_types";
import {HOST} from "../../settings";

const login_request = () => {
    return fetch(HOST + 'verify-token', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + String(localStorage.getItem("tokenERPAN"))
        },
    }).then(response => {
        console.log(response)
        if (!response.ok) throw new Error("Error")
        return response
    }).catch((err) => {
        window.localStorage.removeItem("tokenERPAN")
        window.localStorage.removeItem("nameERPAN")
    })
}

export default login_request