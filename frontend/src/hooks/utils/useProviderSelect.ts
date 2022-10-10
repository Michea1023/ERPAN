import React, {useState} from "react";
import search_providers from "../../services/providers/search_providers";

const INITIAL_VALUE = {
    search: "",
    options: [{
        id: 0,
        value: "",
        label: ""
    }]
}

const useProviderSelect = () => {
    const [state, setState] = useState(INITIAL_VALUE)

    const handleOptions = (evt: React.KeyboardEvent<HTMLDivElement>) => {
        if (evt.key == " ") {
            search_providers(state.search).then((response) => {

            })
        }
    }

    const handleSearch = (newValue: string) => {
        setState({
            ...state,
            ["search"]: newValue
        })
    }

    return {provider: state, handleOptions, handleSearch}
}

export default useProviderSelect