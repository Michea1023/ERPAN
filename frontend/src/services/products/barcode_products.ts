import {HOST} from "../../settings";

/*
send a request [GET] to HOST/products/search/:search to get products' search by :search
@param {string} search -> products search pattern
@returns {Promise<Array<>>}
*/
const barcode_products = (search: string) => {
    return fetch(HOST + 'products/barcode/' + search.replaceAll(" ", "+"), {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + window.localStorage.getItem("tokenERPAN")
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

export default barcode_products