import {Order, OrderDetail, Product} from "../../types/request_types";
import {HOST} from "../../settings";

/*
send a request [POST] to HOST/products to create a product ':order'
@param {Product} product -> product' data
@returns {Promise<>}
*/
const create_order = (order: Order) => {
    return fetch(HOST + 'tickets', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + window.localStorage.getItem("tokenERPAN")
        },
        body: JSON.stringify(order.products)
    }).then(response => {
        if (!response.ok) throw new Error("Bad Response: " + String(response.status))
        return response.json()
    }).then((response) => {
        return response
    }).catch((err) => {
        alert(err)
    })
}

export default create_order