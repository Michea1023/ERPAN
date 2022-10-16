import React, {useState} from "react";
import search_providers from "../../services/providers/search_providers";
import {SingleValue} from "react-select"
import {Product} from "../../types/request_types";

const INITIAL_VALUE = {
    search: "",
    options: [{
        id: 0,
        value: "",
        label: ""
    }]
}

interface Options {
    id: number
    value: string
    label: string
}

interface Props {
    product: Product
    handleProduct: (newProduct: Product) => void
}


const useProviderSelect = ({product, handleProduct}: Props) => {
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

    const handleProvider = (evt: SingleValue<Options>) => {
        if (evt === null) return

        handleProduct({
            ...product,
            ["id_providers"]: evt?.value
        })
    }

    return {
        provider: state,
        providerOptions: handleOptions,
        handleProvider,
        providerSearch: handleSearch
    }
}

export default useProviderSelect