import {HOST} from "../../settings";

const all_categories = () => {
    return fetch(HOST + 'categories', {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + window.localStorage.getItem("tokenERPAN")
        },
    }).then(response => {
        if (!response.ok) throw new Error("Bad Response: " + String(response.status))
        return response.json()
    }).then((response: Array<{ name_categories: string }>) => {
        return response
    }).catch((err) => {
        alert(err)
        return []
    })
}

export default all_categories