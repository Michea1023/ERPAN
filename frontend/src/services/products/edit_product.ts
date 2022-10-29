import {Product} from "../../types/request_types";
import {HOST} from "../../settings";

/*
send a request [PUT] to HOST/products/:id to update the product by its :id
@param {string} id -> product's id
@param {Product} product -> product's data
@returns {Promise<>}
*/
const edit_product = (id: string, product: Product) => {
    return fetch(HOST + 'products/' + id, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + window.localStorage.getItem("tokenERPAN")
        },
        body: JSON.stringify(product)
    }).then(response => {
        if (!response.ok) throw new Error("Bad Response: " + String(response.status))
        return response.json()
    }).catch((error) => {
        alert(error)
    }).then((response) => {
        return response
    })
}

export default edit_product