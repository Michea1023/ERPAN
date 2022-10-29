import React, {useState} from "react";
import search_providers from "../../services/providers/search_providers";
import {SingleValue} from "react-select"
import {Product} from "../../types/request_types";

interface Options {
    value: string
    label: string
}

/*
properties of handler of provider select
 */
interface Props {
    product: Product
    handleProduct: (newProduct: Product) => void
}

/*
initial state for provider select ('state') entity
 */
const INITIAL_VALUE = {
    search: "",
    options: Array<Options>()
}

/*
handle provider select
@param {Props} product, handleProduct -> product's data and handler
@returns    {
            type of INITIAL_VALUE,
            (SingleValue<Option>) => void
            (React.KeyboardEvent<>) => void
            (string) => void
            }
 */
const useProviderSelect = ({product, handleProduct}: Props) => {
    const [state, setState] = useState(INITIAL_VALUE)

    /*
    set a new provider id to the product's state
    @param {SingleValue<Option>} evt -> event obtained when is selected a provider
     */
    const handleOptions = (evt: React.KeyboardEvent<HTMLDivElement>) => {
        if (evt.key == " ") {
            search_providers(state.search).then((response) => {
                const options = response.map((item) => {
                    return {
                        value: item.name_providers,
                        label: item.name_providers
                    }
                })

                setState({
                    ...state,
                    options: options
                })
            })
        }
    }

    /*
    set new options to the provider select state
    @param {React.KeyboardEvent<>} evt -> event obtained when is pressed a key
     */
    const handleSearch = (newValue: string) => {
        setState({
            ...state,
            ["search"]: newValue
        })
    }

    /*
    set a new provider select state
    @param {string} newValue -> new provider select state
     */
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