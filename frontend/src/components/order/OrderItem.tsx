import {OrderDetail} from "../../types/request_types";

interface Props {
    item: OrderDetail
    handleAmount: (id: number, newAmount: number) => void
}

export default function OrderItem({item, handleAmount}: Props) {
    return ( item.amount > 0 ?
        <div>
            <div className='ContainerProduct'>
                <div className='Product '>
                    <div className='name'>{item.product.name_product}</div>
                    <div className='price'>{item.product.price}</div>
                </div>

                <div className='ColumnCount'>
                    <button
                        type='button'
                        className='btn btn-danger '
                        onClick={() => {
                            handleAmount(item.product_id, item.amount - 1)
                        }}
                    >
                        -
                    </button>

                    <p className='Count'>{item.amount}</p>

                    <button
                        type='button'
                        className='btn btn-success'
                        onClick={() => {
                            handleAmount(item.product_id, item.amount + 1)
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </div> : <div></div>
    )
}
