import {useState} from "react";
import {Order} from "../../../types/request_types";
import {ProductResponse} from "../../../types/response_types";

const INITIAL_STATE = {
    general_price: 0,
    products: []
}

const useOrder = (result: Array<ProductResponse>) => {
    const [order, setOrder] = useState<Order>({
        ...INITIAL_STATE,
        products: result.map(item => {
            return {
                id_product: item.id,
                product: item,
                total_price: item.price,
                amount: 1
            }
        })
    })

    const handleProduct = () => {

    }
}

export default useOrder