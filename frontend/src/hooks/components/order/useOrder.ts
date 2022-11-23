import {MouseEventHandler, useEffect, useState} from "react";
import {Order, Product} from "../../../types/request_types";
import {ProductResponse} from "../../../types/response_types";
import create_order from "../../../services/orders/create_order";

const INITIAL_STATE = {
    general_price: 1000,
    products: [{
        product_id: 1,
        product: {
            id: 1,
            id_categories: "asdfa",
            id_providers: "130948",
            bar_code: "32432",
            stock: 20,
            name_product: "askdfjj",
            price: 1000,
            cost: 1200
        },
        total_price: 1000,
        amount: 1
    }]
}

const useOrder = () => {
    const [order, setOrder] = useState<Order>(INITIAL_STATE)

    const pushItem = (newProduct: ProductResponse) => {
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

        const products = order.products.map(item => {
            if (item.product_id !== id) return item
            if (item.product.stock < newAmount) return item

            const newPrice = newAmount*item.product.price

            general_price += newPrice - item.total_price

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