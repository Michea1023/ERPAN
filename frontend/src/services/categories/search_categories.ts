import {HOST, TOKEN} from "../../settings";
import {CategoryResponse} from "../../types/response_types";

const search_categories = (search: string) => {
    return fetch(HOST + 'categories/search/' + search.replaceAll(" ", "+"), {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + TOKEN
        },
    }).then(response => {
        if (!response.ok) throw new Error("Bad Request")
        return response.json()
    }).then((response: Array<CategoryResponse>) => {
        return response
    })
}

export default search_categories