import React, {useEffect, useState} from "react";
import search_providers from "../../services/providers/search_providers";
import {SingleValue} from "react-select"
import {Product} from "../../types/request_types";
import all_categories from "../../services/categories/all_categories";
import all_providers from "../../services/providers/all_providers";

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

    useEffect(() => {
        all_providers().then((res) => {
            setState({
                ...state,
                options: res.map(item => {
                    return {
                        value: item.name_providers,
                        label: item.name_providers
                    }
                })
            })
        })
    }, [])

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
        handleProvider,
        providerSearch: handleSearch
    }
}

export default useProviderSelect