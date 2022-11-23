import React, {useState} from "react";
import {ProductResponse} from "../../../types/response_types";
import barcode_products from "../../../services/products/barcode_products";

const useOrderFetch = (pushItem: (newProduct: ProductResponse) => void) => {
    const [fetch, setFetch] = useState<string>("")

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        console.log(evt.target.value)
        setFetch(evt.target.value)
    }

    const handleBarCode = (bar_code: string) => {
        setFetch(bar_code)
    }

    /**
     * gets a product searched by his bar code, push the product on "fetch.results"
     * @param evt
     */
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        console.log(fetch)
        barcode_products(fetch).then((res) => {
            pushItem(res)
        })
    }

    return {fetch, handleChange, handleBarCode, handleSubmit}
}

export default useOrderFetch