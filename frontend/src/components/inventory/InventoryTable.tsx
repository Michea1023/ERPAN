import useProducts from "../../hooks/components/inventory/useProducts";
import ModalEdit from "./ModalEdit";

/*
properties of the inventory table
 */
interface Props {
    edit: boolean
    handleEdit: (edit: boolean) => void
}

/*
renders the inventory table
@param {Props} edit, handleEdit - params coming from above
@returns {JSX.Element}
*/
export default function InventoryTable ({edit, handleEdit}: Props) {
    const products = useProducts()

    /*
    return the render from a button
    @return: JSX.Element
     */
    const editButton = () =>{
        return <button type="button" className="btn btn-outline-success"
                       onClick={() => handleEdit(true)}>Editar</button>
    }

    return <div className='container mt-3 table-responsive'>
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
                        <th>Editar</th>
                    </tr>
                    </thead>
                    <tbody >
                    <>
                        {
                            products.map((product) =>{
                                return <>
                                    <tr key={product.bar_code}>
                                        <td>{product.bar_code}</td>
                                        <td>{product.name_product}</td>
                                        <td>{product.id_categories}</td>
                                        <td>{product.id_providers}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.price}</td>
                                        <td>{editButton()}</td>
                                    </tr>
                                    <ModalEdit product={product} value={edit} handleClose={() => handleEdit(false)} />
                                </>
                            })
                        }
                    </>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}