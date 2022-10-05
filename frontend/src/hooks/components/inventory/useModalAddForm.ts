import React, {useState} from "react";
import {Product} from "../../../types/request_types";

const INITIAL_VALUE = {
    name: "",
    supplier: "",
    stock: 0,
    price: 0
}

const useModalAddForm = () => {
    const [product, setProduct] = useState<Product>(INITIAL_VALUE)

    const handleSubmit = () => {
        //request
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ... product,
            [evt.currentTarget.name]: evt.currentTarget.value
        })
    }

    return {handleChange, handleSubmit}
}

export default useModalAddForm