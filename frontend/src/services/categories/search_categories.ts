import {HOST, TOKEN} from "../../settings";
import {CategoryResponse} from "../../types/response_types";

/*
send a request [GET] to HOST/categories/search/:search to get categories' search by :search
@param {string} search -> category search pattern
@returns {Promise<Array<CategoryResponse>>}
*/
const search_categories = (search: string) => {
    return fetch(HOST + 'categories/search/' + search.replaceAll(" ", "+"), {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + String(window.localStorage.getItem("tokenERPAN"))
        },
    }).then(response => {
        if (!response.ok) throw new Error("Bad Response: " + String(response.status))
        return response.json()
    }).catch((error) => {
        alert(error)
    }).then((response: Array<CategoryResponse>) => {
        return response
    })
}

export default search_categories