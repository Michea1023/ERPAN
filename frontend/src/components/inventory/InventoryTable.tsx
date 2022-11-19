import useProducts from '../../hooks/components/inventory/useProducts'
import ModalEdit from './ModalEdit'
import { useState } from 'react'
import { ProductResponse } from '../../types/response_types'

/*
properties of the inventory table
 */
interface Props {
  edit: boolean
  handleEdit: (edit: boolean) => void
}

/*
initial state for product form entity
 */
const INITIAL_VALUE = {
  id: 0,
  name_product: '',
  id_providers: '',
  id_categories: '',
  bar_code: '',
  stock: 0,
  price: 0,
  cost: 0,
}

/*
renders the inventory table
@param {Props} edit, handleEdit - params coming from above
@returns {JSX.Element}
*/
export default function InventoryTable({ edit, handleEdit }: Props) {
  const { products, selectProduct } = useProducts()
  const [product, setProduct] = useState<ProductResponse>(INITIAL_VALUE)

  /*
      return the render from a button
      @return: JSX.Element
       */
  const editButton = (product: ProductResponse) => {
    return (
      <button
        type='button'
        className='btn btn-outline-success'
        onClick={() => {
          setProduct(product)
          handleEdit(true)
        }}
      >
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-pencil'
            viewBox='0 0 16 16'
          >
            <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' />
          </svg>
        </div>
      </button>
    )
  }

  return (
    <div className='container mt-3 table-responsive'>
      <div className='row'>
        <div className='col'>
          <table className='table table-striped table-hover table-bordered'>
            <thead className='table-dark'>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Proveedor</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>Costo</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              <>
                {products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>{product.bar_code}</td>
                      <td>{product.name_product}</td>
                      <td>{product.id_categories}</td>
                      <td>{product.id_providers}</td>
                      <td>{product.stock}</td>
                      <td>{product.price}</td>
                      <td>{product.cost}</td>
                      <td>{editButton(product)}</td>
                    </tr>
                  )
                })}
              </>
            </tbody>
          </table>
        </div>
      </div>
      <ModalEdit
        product={product}
        value={edit}
        handleClose={() => handleEdit(false)}
      />
    </div>
  )
}
