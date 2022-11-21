import { Button, Modal, ModalFooter } from 'react-bootstrap'

interface Props {
  value: boolean
  handleClose: () => void
}
export default function ModalDetail({ value, handleClose }: Props) {
  return (
    <Modal show={value} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles de venta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>dadsa</div>
        <div>uwu</div>
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
