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
                product_id: item.id,
                product: item,
                total_price: item.price,
                amount: 1
            }
        })
    })

    const handleAmount = (id: number, newAmount: number) => {
        setOrder({
            ...order,
            products: order.products.map(item => {
                if (item.product_id === id) {
                    return item
                }

                const newPrice = newAmount*item.product.price

                setOrder({
                    ...order,
                    general_price: order.general_price - item.total_price + newPrice
                })

                return {
                    ...item,
                    amount: newAmount,
                    total_price: newPrice
                }
            })
        })
    }

    return {order, handleAmount}
}

export default useOrder