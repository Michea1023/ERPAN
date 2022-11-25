import React, {useEffect, useState} from "react";
import search_categories from "../../services/categories/search_categories";
import {SingleValue} from "react-select"
import {Product} from "../../types/request_types";
import all_categories from "../../services/categories/all_categories";

interface Options {
    value: string
    label: string
}

/*
properties of handler of category select
 */
interface Props {
    product: Product
    handleProduct: (newProduct: Product) => void
}

/*
initial state for category select ('state') entity
 */
const INITIAL_VALUE = {
    search: "",
    options: Array<Options>()
}

/*
handles category select
@param {Props} product, handleProduct -> product's data and handler
@returns    {
            type of INITIAL_VALUE,
            (SingleValue<Option>) => void
            (React.KeyboardEvent<>) => void
            (string) => void
            }
 */
const useCategorySelect = ({product, handleProduct}: Props) => {
    const [state, setState] = useState(INITIAL_VALUE)

    useEffect(() => {
        all_categories().then((res) => {
            setState({
                ...state,
                options: res.map(item => {
                    return {
                        value: item.name_categories,
                        label: item.name_categories
                    }
                })
            })
        })
    }, [])

    /*
    sets a new category id to the product's state
    @param {SingleValue<Option>} evt -> event obtained when is selected a category
     */
    const handleCategory = (evt: SingleValue<Options>) => {
        if (evt == null) return

        handleProduct({
            ...product,
            ["id_categories"]: evt?.value
        })

        console.log(product)
    }

    /*
    sets a new category select state
    @param {string} newValue -> new category select state
     */
    const handleSearch = (newValue: string) => {
        setState({
            ...state,
            search: newValue
        })
    }

    return {
        category: state,
        categorySearch: handleSearch,
        handleCategory
    }
}

export default useCategorySelect