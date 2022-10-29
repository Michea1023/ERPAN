import {HOST, TOKEN} from "../../settings";
import { ProductList } from "../../types/response_types";

/*
send a request [GET] to HOST/products to get all products
@returns {Promise<Array<ProductList>>}
*/
const all_products = ():Promise<ProductList> => {
    return fetch(HOST + 'products', {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + window.localStorage.getItem("tokenERPAN")
        },
    }).then(response => {
        if (!response.ok) throw new Error("Bad Response: " + String(response.status))
        return response.json()
    }).catch((err) => {
        alert(err)
    }).then((response) => {
        return response
    })
}

export default all_products