import {HOST} from "../../settings";
import {ProviderResponse} from "../../types/response_types";

/*
send a request [GET] to HOST/providers/search/:search to get providers' search by :search
@param {string} search -> providers search pattern
@returns {Promise<Array<ProviderResponse>>}
*/
const search_providers = (search: string) => {
    return fetch(HOST + 'providers/search/' + search.replaceAll(" ", "+"), {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + window.localStorage.getItem("tokenERPAN")
        },
    }).then(response => {
        if (!response.ok) throw new Error("Bad Response: " + String(response.status))
        return response.json()
    }).catch((error) => {
        alert(error)
    }).then((response: Array<ProviderResponse>) => {
        return response
    })
}

export default search_providers