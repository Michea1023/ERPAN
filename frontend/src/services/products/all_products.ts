import {HOST, TOKEN} from "../../settings";
import { ProductList } from "../../types/response_types";

const all_products = ():Promise<ProductList> => {
    return fetch(HOST + 'products', {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + TOKEN
        },
    }).then(response => {
        if (!response.ok) throw new Error("Bad Request")
        return response.json()
    }).catch((err) => {
        console.log(err)
    }).then((response) => {
        return response
    })
}

export default all_products