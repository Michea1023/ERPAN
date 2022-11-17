import useProducts from '../../hooks/components/inventory/useProducts'
import ModalEdit from './ModalEdit'
import {useState} from "react";
import {ProductResponse} from "../../types/response_types";

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
    name_product: "",
    id_providers: "",
    id_categories: "",
    bar_code: "",
    stock: 0,
    price: 0,
    cost: 0
}

/*
renders the inventory table
@param {Props} edit, handleEdit - params coming from above
@returns {JSX.Element}
*/
export default function InventoryTable({edit, handleEdit}: Props) {
    const {products, selectProduct} = useProducts()
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
                Editar
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
