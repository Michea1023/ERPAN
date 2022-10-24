import {HOST, TOKEN} from "../../settings";
import {ProviderResponse} from "../../types/response_types";

const search_providers = (search: string) => {
    return fetch(HOST + 'providers/search/' + search.replaceAll(" ", "+"), {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + TOKEN
        },
    }).then(response => {
        if (!response.ok) throw new Error("Bad Request")
        return response.json()
    }).then((response: Array<ProviderResponse>) => {
        return response
    })
}

export default search_providers