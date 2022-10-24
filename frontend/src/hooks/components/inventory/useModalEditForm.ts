import React, {useState} from "react";
import {Product} from "../../../types/request_types";
import edit_product from "../../../services/products/edit_product";

const useModalEditForm = (defaultValue: Product) => {
    const [product, setProduct] = useState<Product>(defaultValue)

    const handleSubmit = () => {
        if (product.id === undefined) {
            return alert("error")
        }
        edit_product(String(product.id), product).then()
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