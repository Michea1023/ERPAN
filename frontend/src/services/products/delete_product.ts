import {HOST} from "../../settings";

/*
send a request [DELETE] to HOST/products/:id to delete the product by its :id
@param {string} id -> product's id
@returns {Promise<>}
*/
const delete_product = (id: string) => {
    return fetch(HOST + 'products/' + id, {
        method: "DELETE",
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

export default delete_product