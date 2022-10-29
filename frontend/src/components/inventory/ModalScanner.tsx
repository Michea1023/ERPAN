import React, { useState } from 'react'
import { ModalFooter } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Scan from '../../utils/Scan'
interface Props {
  value: boolean
  handleClose: () => void
}

export default function ModalScanner({ value, handleClose }: Props) {
  return (
    <Modal show={value} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Escaner código de barra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Scan />
      </Modal.Body>
      <ModalFooter>
        <Button variant='secondary' onClick={handleClose}>
          Cerrar
        </Button>
        <Button
          variant='primary'
          onClick={() => {
            handleClose()
          }}
        >
          Ingresar Código
        </Button>
      </ModalFooter>
    </Modal>
  )
}
