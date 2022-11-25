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
        <div className='d-flex justify-content-between p-1'>
          
          <td>Producto: Pansito</td>
          <td>Cantidad: 2</td>
          <td>Precio: $2000</td>

        </div>  

          
        <div className='d-flex justify-content-between p-1'>
          <td>Producto: Pansito</td>
          <td>Cantidad: 2</td>
          <td>Precio: $2000</td>

        </div>  
        <hr></hr>
        <div className='d-flex flex-row-reverse p-1 '>
          <div>Total: 4000</div>
          
          
        </div>
        

       
        
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
