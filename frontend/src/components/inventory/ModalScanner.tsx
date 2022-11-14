import React, {useState} from 'react'
import {ModalFooter} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Scan from '../../utils/Scan'
import {Product} from "../../types/request_types";

interface Props {
    value: boolean
    handleClose: () => void
    handleBarCode: (bar_code: string) => void
}

export default function ModalScanner({value, handleClose, handleBarCode}: Props) {
    return (
        <Modal show={value} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Escaner código de barra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Scan handleBarCode={handleBarCode}/>
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
