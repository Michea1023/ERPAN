import {Product} from "../../types/request_types";
import {HOST, TOKEN} from "../../settings";

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
        if (!response.ok) throw new Error("Bad Request")
        return response.json()
    }).catch((err) => {
        console.log(err)
    }).then((response) => {
        return response
    })
}

export default create_product