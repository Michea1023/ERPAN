import {useEffect, useState} from "react"
import all_products from "../../../services/products/all_products"
import {TOKEN} from "../../../settings"
import {ProductList} from "../../../types/response_types"

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
            setProducts(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return products
}

export default useProducts