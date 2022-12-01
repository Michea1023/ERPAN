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
