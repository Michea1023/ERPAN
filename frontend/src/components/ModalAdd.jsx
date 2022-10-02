import React,{useState} from "react";
import { ModalFooter } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function ModalAdd ({showAdd,handleCloseAdd}) {
    return (
        <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
            <Modal.Title>Agregar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <ModalFooter>
            <Button variant="secondary" onClick={handleCloseAdd}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleCloseAdd}>
                Agregar
            </Button>
        </ModalFooter>
        </Modal>
    )
}