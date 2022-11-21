import { Button, Modal, ModalFooter } from 'react-bootstrap'

interface Props {
  value: boolean
  handleClose: () => void
}

export default function ModalResume({ value, handleClose }: Props) {
  return (
    <Modal show={value} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Boleta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Aqui va la boleta</div>
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
