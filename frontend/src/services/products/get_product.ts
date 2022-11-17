import {HOST} from "../../settings";

/*
send a request [GET] to HOST/products/:id to get a product by its :id
@param {Business_Login} id -> product's id
@returns {Promise<>}
*/
const get_product = (id: string) => {
    return fetch(HOST + 'products/' + id, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + window.localStorage.getItem("tokenERPAN")
        },
    }).then(response => {
        if (!response.ok) throw new Error("Bad Response: " + String(response.status))
        return response.json()
    }).then((response) => {
        return response
    }).catch((err) => {
        alert(err)
    })
}

export default get_product