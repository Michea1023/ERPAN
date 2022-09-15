import {Business} from "../../types/request_types";
import {Business_Response} from "../../types/response_types";

const HOST = "http://localhost:3001/api/"

const register_request = (business: Business): Promise<Business_Response> => {
    return fetch(HOST + 'register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(business)
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