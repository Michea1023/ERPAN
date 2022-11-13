import { useState } from 'react'

export default function OrderTable() {
  const [cantidad, setCantidad] = useState(1)
  return (
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
    </div>
  )
}
