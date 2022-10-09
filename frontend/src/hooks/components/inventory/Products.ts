import { useEffect, useState } from "react"
import all_products from "../../../services/products/all_products"
import { ProductList } from "../../../types/response_types"

const Products = () =>{
    const [products,setProducts] = useState<ProductList>([
        {
            id: 0,
            id_categories: 0,
            id_providers: 0,
            bar_code: 0,
            stock: 0,
            name_product: "Hola",
            price: 0
        },
        {
            id: 0,
            id_categories: 0,
            id_providers: 0,
            bar_code: 0,
            stock: 0,
            name_product: "Chao",
            price: 0
        }
    ])

    /*
    useEffect (() => {
        
        all_products().then((res) =>{
            setProducts(res)
        }).catch((err) =>{
            console.log(err)
        })

    },[])
*/
    console.log(products)
    return products
}

export default Products