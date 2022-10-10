import React, {useState} from "react";
import { ModalFooter } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import useModalAddForm from "../../hooks/components/inventory/useModalAddForm";

interface Props {
    value: boolean
    handleClose: () => void
}

export default function ModalAdd ({value, handleClose}: Props) {
    const {out, handleChange, handleSubmit, handleCategory, handleProvider} = useModalAddForm()

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
                                name={"name_product"}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Categoria</label>
                            <Select
                                name={"id_categories"}
                                options={out.category.state.options}
                                inputValue={out.category.state.search}
                                onChange={handleCategory}
                                onInputChange={out.category.handleSearch}
                                onKeyDown={out.category.handleOptions}
                                isSearchable={true}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Proveedor</label>
                            <Select
                                name={"id_providers"}
                                options={out.provider.state.options}
                                inputValue={out.provider.state.search}
                                onChange={handleProvider}
                                onInputChange={out.provider.handleSearch}
                                onKeyDown={out.provider.handleOptions}
                                isSearchable={true}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Stock</label>
                            <input
                                type="number"
                                className="form-control mt-1"
                                name={"stock"}
                                defaultValue={0}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Precio</label>
                            <input
                                type="number"
                                className="form-control mt-1"
                                name={"price"}
                                defaultValue={0}
                                onChange={handleChange}
                                required
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
            <Button variant="primary" onClick={
                () => {
                    handleSubmit()
                    handleClose()
                }}>
                Agregar
            </Button>
        </ModalFooter>
        </Modal>
    )
}