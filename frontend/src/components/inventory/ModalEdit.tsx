import React,{useState} from "react";
import { ModalFooter } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

interface Props {
    value: boolean
    handleClose: () => void
}

export default function ModalEdit ({value, handleClose}: Props) {
    return (<Modal show={value} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Editar producto</Modal.Title>
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
                                placeholder="Editar nombre"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Categoria</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                name={"category"}
                                placeholder="Editar categoria"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Proveedor</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                name={"supplier"}
                                placeholder="Editar proveedor"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Stock</label>
                            <input
                                type="number"
                                className="form-control mt-1"
                                name={"Stock"}
                                placeholder="Editar stock"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Precio</label>
                            <input
                                type="number"
                                className="form-control mt-1"
                                name={"Price"}
                                placeholder="Editar precio"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </Modal.Body>
        <ModalFooter>
            <Button className="btn-danger" variant="secondary" onClick={handleClose}>
                Eliminar producto
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Guardar cambios
            </Button>
        </ModalFooter>
    </Modal>)
}