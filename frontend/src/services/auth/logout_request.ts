import {HOST} from "../../settings";

/*
send a request [POST] to HOST/logout for logout from the system
@returns {Promise}
*/
const logout_request = () => {
    return fetch(HOST + 'logout',{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        }
    }).then(response =>{
        if(!response.ok) throw new Error("Error")
        return response.json()
    }).catch((error)=> {
        alert(error)
    }).then((response) => {
        window.localStorage.removeItem("tokenERPAN")
        window.localStorage.removeItem("nameERPAN")
        return response
    })
}

export default logout_request