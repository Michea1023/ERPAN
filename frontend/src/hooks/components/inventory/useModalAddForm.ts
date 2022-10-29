import React, {useState} from "react";
import {Product} from "../../../types/request_types";
import create_product from "../../../services/products/create_product";

/*
initial state for add-product form entity
 */
const INITIAL_VALUE = {
    name_product: "",
    id_providers: "",
    id_categories: "",
    bar_code: 0,
    stock: 0,
    price: 0
}

/*
handles the add-product form
@returns    {
            Product,
            (Product) => void
            (React.FormEvent<>) => void
            (React.ChangeEvent<>) => void
            }
 */
const useModalAddForm = () => {
    const [product, setProduct] = useState<Product>(INITIAL_VALUE)

    /*
    adds a product
    @param {React.FormEvent<>} evt -> event obtained when is submitted the add-product form
     */
    const handleSubmit = () => {
        create_product(product).then()
    }

    /*
    sets a new product state
    @param {Product} newValue -> new product state
     */
    const handleProduct = (newValue: Product) => {
        setProduct(newValue)
    }

    /*
    sets a new add-product form state
    @param {React.ChangeEvent} evt -> event obtained when is changed the add-product form
     */
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ... product,
            [evt.currentTarget.name]: evt.currentTarget.value
        })
    }

    return {product, handleProduct, handleChange, handleSubmit}
}

export default useModalAddForm