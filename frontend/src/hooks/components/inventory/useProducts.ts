import {useEffect, useState} from "react"
import all_products from "../../../services/products/all_products"
import {ProductList} from "../../../types/response_types"
import {useNavigate, useParams} from "react-router-dom";
import search_products from "../../../services/products/search_products";

/*
return all products from a business
@returns ProductList
 */
const useProducts = () => {
    const [products, setProducts] = useState<ProductList>([])
    const {search} = useParams()

    /*
    gets all products when the app is refreshed
     */
    useEffect(() => {
        if (search === undefined || search === "") {
            all_products().then((res) => {
                if (res === undefined) return

                setProducts(res)
            })
        } else {
            search_products(search).then((res) => {
                if (res === undefined) return

                setProducts(res)
            })
        }
    }, [])

    return {products}
}

export default useProducts