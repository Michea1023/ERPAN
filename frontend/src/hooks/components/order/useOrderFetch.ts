import React, {useState} from "react";
import {ProductResponse} from "../../../types/response_types";
import barcode_products from "../../../services/products/barcode_products";

interface State {
    search: string
    result: Array<ProductResponse>
}

const INITIAL_STATE = {
    search: "",
    result: []
}

const useOrderFetch = () => {
    const [fetch, setFetch] = useState<State>(INITIAL_STATE)

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setFetch({
            ...fetch,
            ["search"]: evt.currentTarget.name
        })
    }

    const handleBarCode = (bar_code: string) => {
        setFetch({
            ...fetch,
            ["search"]: bar_code
        })
    }

    /**
     * gets a product searched by his bar code, push the product on "fetch.results"
     * @param evt
     */
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        barcode_products(fetch.search).then((res) => {
            fetch.result.push(res)
        })
    }

    return {fetch, handleChange, handleBarCode, handleSubmit}
}

export default useOrderFetch