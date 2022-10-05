import {HOST, TOKEN} from "../../settings";

const search_products = (search: string) => {
    return fetch(HOST + 'products/' + search.replaceAll(" ", "+"), {
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

export default search_products