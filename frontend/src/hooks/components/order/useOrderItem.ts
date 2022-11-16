import {OrderDetail} from "../../../types/request_types";
import {useState} from "react";


const useOrderItem = (item: OrderDetail) => {
    const [orderDetail, setOrderDetail] = useState<OrderDetail>(item)

    const handleAmount = (newAmount: number) => {
        if (orderDetail.product.stock < newAmount || newAmount <= 0) {
            return
        }

        setOrderDetail({
            ...orderDetail,
            amount: newAmount,
            total_price: orderDetail.total_price*newAmount
        })
    }

    return {orderDetail, handleAmount}
}

export default useOrderItem