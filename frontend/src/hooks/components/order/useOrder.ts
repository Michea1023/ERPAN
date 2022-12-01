import {MouseEventHandler, useEffect, useState} from "react";
import {Order, Product} from "../../../types/request_types";
import {ProductResponse} from "../../../types/response_types";
import create_order from "../../../services/orders/create_order";

const INITIAL_STATE = {
    general_price: 0,
    products: []
}

const useOrder = (handleResume: (resume: boolean) => void) => {
    const [order, setOrder] = useState<Order>(INITIAL_STATE)

    const pushItem = (newProduct: ProductResponse) => {
        if (order.products.filter(item => {return item.id_product === newProduct.id})[0]) return

        setOrder({
            products: [
                ...order.products,
                {
                    id_product: newProduct.id,
                    product: newProduct,
                    total_price: newProduct.price,
                    amount: 1
                }
            ],
            general_price: order.general_price + newProduct.price
        })
    }

    const handleAmount = (id: number, newAmount: number) => {

        let general_price = order.general_price

        const products = order.products.filter(item => {
            if (item.id_product !== id) return true;
            if (item.product.stock < newAmount) return item

            general_price += newAmount*item.product.price - item.total_price

            return newAmount != 0;
        }).map(item => {
            const newPrice = newAmount*item.product.price
            return {
                ...item,
                amount: newAmount,
                total_price: newPrice
            }
        })

        if (products.length === 0) general_price = 0

        setOrder({
            ["general_price"]: general_price,
            ["products"]: products
        })
    }

    const handleOrder = () => {
        create_order(order).then((res) => {
            if (res === undefined) return

            handleResume(true)
        })
    }

    const clearAll = () => {
        setOrder(INITIAL_STATE)
    }

    return {order, handleAmount, handleOrder, pushItem, clearAll}
}

export default useOrder