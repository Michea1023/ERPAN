import {Business_Register} from "../../types/request_types";
import {Business_Response} from "../../types/response_types";

const HOST = "http://localhost:3001/api/"

const register_request = (business: Business_Register): Promise<Business_Response> => {
    return fetch(HOST + 'register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name_business: business.name,
            email: business.email,
            short_name: business.short_name,
            password: business.password,
            password_confirm: business.password_confirm
        })
    }).then(response => {
        if (!response.ok) throw new Error("Error")
        return response.json()
    }).catch(()=> {
        console.log("HASTA AQUI LLEGASTE")
    }).then((response: Business_Response) => {
        window.localStorage.setItem("tokenERPAN", response.token)
        window.localStorage.setItem("nameERPAN", response.name)
        return response
    })
}

export default register_request