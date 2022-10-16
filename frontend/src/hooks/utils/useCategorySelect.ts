import React, {useState} from "react";
import search_categories from "../../services/categories/search_categories";
import {SingleValue} from "react-select"
import {Product} from "../../types/request_types";
import {ProductResponse} from "../../types/response_types";

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

const useCategorySelect = ({product, handleProduct}: Props) => {
    const [state, setState] = useState(INITIAL_VALUE)

    const handleCategory = (evt: SingleValue<Options>) => {
        if (evt == null) return

        handleProduct({
            ...product,
            ["id_categories"]: evt?.value
        })
    }

    const handleOptions = (evt: React.KeyboardEvent<HTMLDivElement>) => {
        if (evt.key === " ") {
            // search_categories(state.search).then((response) => {
            //     // set options
            // })
        }
    }

    const handleSearch = (newValue: string) => {
        setState({
            ...state,
            search: newValue
        })
    }

    return {
        category: state,
        categoryOptions: handleOptions,
        categorySearch: handleSearch,
        handleCategory
    }
}

export default useCategorySelect