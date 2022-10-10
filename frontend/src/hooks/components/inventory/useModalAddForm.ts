import React, {useState} from "react";
import {Product} from "../../../types/request_types";
import useCategorySelect from "../../utils/useCategorySelect";
import {SingleValue} from "react-select"
import useProviderSelect from "../../utils/useProviderSelect";

interface Options {
    id: number
    value: string
    label: string
}

interface SelectOption {
    state: {
        search: string,
        options: Array<Options>
    }
    handleOptions: (evt: React.KeyboardEvent<HTMLDivElement>) => void
    handleSearch: (newValue: string) => void
}

interface OutSelect {
    category: SelectOption
    provider: SelectOption
}

const INITIAL_VALUE = {
    name_product: "",
    id_providers: 0,
    id_categories: 0,
    stock: 0,
    price: 0
}


const useModalAddForm = () => {
    const [product, setProduct] = useState<Product>(INITIAL_VALUE)
    const {category, handleOptions: categoryOptions, handleSearch: categorySearch} =
        useCategorySelect()
    const {provider, handleOptions: providerOptions, handleSearch: providerSearch} = useProviderSelect()

    const [out, setOut] = useState<OutSelect>({
        category: {
            state: category,
            handleOptions: categoryOptions,
            handleSearch: categorySearch
        }, provider: {
            state: provider,
            handleOptions: providerOptions,
            handleSearch: providerSearch
        }
    })

    const handleSubmit = () => {
        //request
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ... product,
            [evt.currentTarget.name]: evt.currentTarget.value
        })
    }

    const handleCategory = (evt: SingleValue<Options>) => {
        if (evt == null) return

        setProduct({
            ...product,
            ["id_categories"]: evt?.id
        })
    }

    const handleProvider = (evt: SingleValue<Options>) => {
        if (evt === null) return

        setProduct({
            ...product,
            ["id_providers"]: evt?.id
        })
    }

    return {out, handleChange, handleSubmit, handleCategory, handleProvider}
}

export default useModalAddForm