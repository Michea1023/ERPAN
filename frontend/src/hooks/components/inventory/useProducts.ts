import {useEffect, useState} from "react"
import all_products from "../../../services/products/all_products"
import {TOKEN} from "../../../settings"
import {ProductList} from "../../../types/response_types"

/*
initial state for product form entity
 */
const INITIAL_VALUE = {
    id: 0,
    name_product: "",
    id_providers: "",
    id_categories: "",
    bar_code: "",
    stock: 0,
    price: 0,
    cost: 0
}

/*
return all products from a business
@returns ProductList
 */
const useProducts = () => {
    const [products, setProducts] = useState<ProductList>([])

    /*
    gets all products when the app is refreshed
     */
    useEffect(() => {
        all_products().then((res) => {
            if (res === undefined) return

            setProducts(res)
        })
    }, [])

    const filterProducts = () => {

    }

    return {products}
}

export default useProducts