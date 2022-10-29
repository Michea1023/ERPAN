import {Product} from "../../types/request_types";
import {HOST} from "../../settings";

/*
send a request [POST] to HOST/products to create a product ':product'
@param {Product} product -> product' data
@returns {Promise<>}
*/
const create_product = (product: Product) => {
    return fetch(HOST + 'products', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + window.localStorage.getItem("tokenERPAN")
        },
        body: JSON.stringify(product)
    }).then(response => {
        if (!response.ok) throw new Error("Bad Response: " + String(response.status))
        return response.json()
    }).catch((err) => {
        alert(err)
    }).then((response) => {
        return response
    })
}

export default create_product