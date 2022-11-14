import {useState} from 'react'
import {ProductResponse} from "../../types/response_types";

interface Props {
    item: ProductResponse
}

export default function OrderItem({item}: Props) {
    const [cantidad, setCantidad] = useState(1)
    return ( cantidad > 0 ?
        <div>
            <div className='ContainerProduct'>
                <div className='Product '>
                    <div className='name'>arroz</div>
                    <div className='price'>1000</div>
                </div>

                <div className='ColumnCount'>
                    <button
                        type='button'
                        className='btn btn-danger '
                        onClick={() => {
                            setCantidad(cantidad - 1)
                        }}
                    >
                        -
                    </button>

                    <p className='Count'>{cantidad}</p>

                    <button
                        type='button'
                        className='btn btn-success'
                        onClick={() => {
                            setCantidad(cantidad + 1)
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </div> : <div></div>
    )
}
