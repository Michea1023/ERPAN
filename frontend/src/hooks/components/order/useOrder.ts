import {MouseEventHandler, useEffect, useState} from "react";
import {Order, Product} from "../../../types/request_types";
import {ProductResponse} from "../../../types/response_types";
import create_order from "../../../services/orders/create_order";

const INITIAL_STATE = {
    general_price: 0,
    products: []
}

const useOrder = () => {
    const [order, setOrder] = useState<Order>(INITIAL_STATE)

    const pushItem = (newProduct: ProductResponse) => {
        if (order.products.filter(item => {return item.product_id === newProduct.id})[0]) return

        setOrder({
            products: [
                ...order.products,
                {
                    product_id: newProduct.id,
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
            if (item.product_id !== id) return true;
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

        setOrder({
            ["general_price"]: general_price,
            ["products"]: products
        })
    }

    const handleOrder = () => {
        create_order(order).then()
    }

    return {order, handleAmount, handleOrder, pushItem}
}

export default useOrder