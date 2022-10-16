import { Business_Response } from "../../types/response_types"
import {Business_Login} from "../../types/request_types";
import {HOST} from "../../settings";

const login_request = (business:Business_Login):Promise<Business_Response> => {
    return fetch(HOST + 'login',{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(business)
    }).then(response =>{
        if(!response.ok) throw new Error("Error")
        return response.json()
    }).catch(()=> {
        console.log("Incorrect email or password")
    }).then((response:Business_Response) => {
        window.localStorage.setItem("tokenERPAN",response.token)
        window.localStorage.setItem("nameERPAN",response.name_business)
        return response
    })
}

export default login_request