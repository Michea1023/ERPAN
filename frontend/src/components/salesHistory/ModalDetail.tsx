import {Button, Modal, ModalFooter} from 'react-bootstrap'
import {Ticket} from "../../types/response_types";
import useModalDetail from "../../hooks/components/salesHistory/useModalDetail";

interface Props {
    value: boolean
    handleClose: () => void
    ticket: Ticket
}

export default function ModalDetail({ticket, value, handleClose}: Props) {
    const {products, clearAll} = useModalDetail(ticket)

    return (
        <Modal show={value} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detalles de venta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    products.map((item) => {
                        return <div className='d-flex justify-content-between p-1'>
                            <td>Producto: {item.name_product}</td>
                            <td>Cantidad: {item.amount}</td>
                            <td>Precio: {item.total_price}</td>
                        </div>
                    })
                }
                <hr></hr>
                <div className='d-flex flex-row-reverse p-1 '>
                    <div>Total: {ticket.general_price}</div>
                </div>
            </Modal.Body>
            <ModalFooter>
                <Button
                    className='btn-danger'
                    variant='secondary'
                    onClick={() => {
                        handleClose()
                        clearAll()
                    }}
                >
                    Cerrar
                </Button>
            </ModalFooter>
        </Modal>
    )
}
