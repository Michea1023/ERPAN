import {Button, Modal, ModalFooter} from 'react-bootstrap'
import {Order} from "../../types/request_types";

interface Props {
    value: boolean
    handleClose: () => void
    order: Order
}

export default function ModalResume({value, handleClose, order}: Props) {
    return (
        <Modal show={value} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Boleta generada exitosamente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {order.products.map((item) => {
                    return <div className='d-flex justify-content-between p-1'>

                        <td>Producto: {item.product.name_product}</td>
                        <td>Cantidad: {item.amount}</td>
                        <td>Precio: {item.total_price}</td>

                    </div>
                })}
                <hr></hr>
                <div>Fecha: {(new Date()).toLocaleDateString("en-GB")}</div>
                <div>Total: $ {order.general_price}</div>
            </Modal.Body>
            <ModalFooter>
                <Button
                    className='btn-danger'
                    variant='secondary'
                    onClick={handleClose}
                >
                    Cerrar
                </Button>
            </ModalFooter>
        </Modal>
    )
}
