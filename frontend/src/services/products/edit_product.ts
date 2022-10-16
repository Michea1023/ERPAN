import {Product} from "../../types/request_types";
import {HOST, TOKEN} from "../../settings";

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
        if (!response.ok) throw new Error("Bad Request")
        return response.json()
    }).catch((err) => {
        console.log(err)
    }).then((response) => {
        return response
    })
}

export default edit_product