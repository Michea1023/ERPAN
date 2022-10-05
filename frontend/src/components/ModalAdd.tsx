import React, {useState} from "react";
import { ModalFooter } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

interface Props {
    value: boolean
    handleClose: () => void
}

export default function ModalAdd ({value, handleClose}: Props) {
    return (
        <Modal show={value} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Agregar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="d-flex justify-content-center align-items-center">
        <form className="Auth-form" >
        <div className="Auth-form-content">
          <div className="form-group mt-3">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control mt-1"
              name={"name"}
            />
          </div>
          <div className="form-group mt-3">
            <label>Categoria</label>
            <input
              type="text"
              className="form-control mt-1"
              name={"category"}
            />
          </div>
          <div className="form-group mt-3">
            <label>Proveedor</label>
            <input
              type="text"
              className="form-control mt-1"
              name={"supplier"}
            />
          </div>
          <div className="form-group mt-3">
            <label>Stock</label>
            <input
              type="number"
              className="form-control mt-1"
              name={"Stock"}
            />
          </div>
          <div className="form-group mt-3">
            <label>Precio</label>
            <input
              type="number"
              className="form-control mt-1"
              name={"Price"}
            />
          </div>
        </div>
      </form>   
      </div>         
        </Modal.Body>
        <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Agregar
            </Button>
        </ModalFooter>
        </Modal>
    )
}