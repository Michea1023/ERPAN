import React, {useState} from "react";
import {Product} from "../../../types/request_types";
import edit_product from "../../../services/products/edit_product";

/*
handles the edit-product form
@param {Product} defaultValue -> product's default value
@returns    {
            Product,
            (Product) => void
            (React.FormEvent<>) => void
            (React.ChangeEvent<>) => void
            }
 */
const useModalEditForm = (defaultValue: Product) => {
    const [product, setProduct] = useState<Product>(defaultValue)

    /*
    adds a product
    @param {React.FormEvent<>} evt -> event obtained when is submitted the add-product form
     */
    const handleSubmit = () => {
        if (product.id === undefined) {
            return alert("error")
        }
        edit_product(String(product.id), product).then()
    }

    /*
    sets a new product state
    @param {Product} newValue -> new product state
     */
    const handleProduct = (newValue: Product) => {
        setProduct(newValue)
    }

    /*
    sets a new edit-product form state
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

export default useModalEditForm