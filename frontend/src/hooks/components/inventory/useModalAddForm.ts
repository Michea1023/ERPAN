import React, {useState} from "react";
import {Product} from "../../../types/request_types";
import create_product from "../../../services/products/create_product";

const INITIAL_VALUE = {
    name_product: "",
    id_providers: "",
    id_categories: "",
    bar_code: 0,
    stock: 0,
    price: 0
}


const useModalAddForm = () => {
    const [product, setProduct] = useState<Product>(INITIAL_VALUE)

    const handleSubmit = () => {
        create_product(product).then()
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

export default useModalAddForm