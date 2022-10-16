import React, {useState} from "react";
import {Product} from "../../../types/request_types";

const useModalEditForm = (defaultValue: Product) => {
    const [product, setProduct] = useState<Product>(defaultValue)

    const handleSubmit = () => {
        //request
    }

    const handleProduct = (newValue: Product) => {
        setProduct(newValue)
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ... product,
            [evt.currentTarget.name]: evt.currentTarget.value
        })
    }

    return {product, handleProduct, handleChange, handleSubmit}
}

export default useModalEditForm