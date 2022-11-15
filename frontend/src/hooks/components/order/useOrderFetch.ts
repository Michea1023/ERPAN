import React, {useState} from "react";
import {ProductResponse} from "../../../types/response_types";
import create_order from "../../../services/orders/create_order";

interface State {
    search: string
    result: Array<ProductResponse>
    sum: number
}

const INITIAL_STATE = {
    search: "",
    result: [],
    sum: 0
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
     * and sums the price on the "fetch.sum"
     * @param evt
     */
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        create_order().then()
    }

    return {fetch, handleChange, handleBarCode, handleSubmit}
}

export default useOrderFetch